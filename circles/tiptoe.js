const SQRT_2 = Math.sqrt(2);
const MAX_TIME = 1000;
var posIdCounter = 0;
var colors = {};
var circles = [];
var start;
var end;
let canvas = document.getElementById("circlefield");
var ctx = canvas.getContext("2d");
var output = document.getElementById("output");
var json = document.getElementById("circles_json");
var animationSpeed = 0;
var timer;
var circleListModified = false;

class Dict {
    constructor(eqFnc) {
        this._eqFnc = eqFnc;
        this._keys = [];
        this._values = [];
    }
    forEach(fnc) {
        for (let i=0; i<this.size(); i++) {
            fnc(this._keys[i], this._values[i], i);
        }
    }
    set(key, value) {
        let idx = this._keys.findIndex(a => this._eqFnc(a, key));
        if (idx === -1) {
            this._keys.push(key);
            this._values.push(value);
        } else {
            this._values[idx] = value;
        }
    }
    get(key, fallback=null) {
        let idx = this._keys.findIndex(a => this._eqFnc(a, key));
        if (idx === -1) {
            return fallback;
        } else {
            return this._values[idx];
        }
    }
    size() {
        return this._keys.length;
    }
    clear() {
        this._keys.length = 0;
        this._values.length = 0;
    }
}

function getOffsetTop( elem )
{
    let offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
          offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    console.log(offsetTop);
    return offsetTop;
}

const circleField = new CircleField(ctx);
const pathFinder = new Pathfinder();

window.onresize = setCanvasSize;

window.onload =  function() {

    updateAnimationSpeed();
    setCanvasSize();

    start = new Vector(10, 10);
    start.blocking = false;
    start_circle = new Circle(0, 0, 0);
    start_circle.center = start;
    start_circle.start = true;
    start.circle = start_circle;
    end = new Vector(ctx.canvas.width-10, ctx.canvas.height-10);
    end.blocking = false;
    end_circle = new Circle(0, 0, 0);
    end_circle.center = end;
    end_circle.end = true;
    end.circle = end_circle;

    circles.push(start_circle, end_circle);
    generateRandomCircles();

    updateColors();
    updateJson();
};

function setCanvasSize(ctx) {
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight-getOffsetTop(canvas)-60;
    circleField.update();

    document.getElementById("dimensions_width").value = canvas.width;
    document.getElementById("dimensions_height").value = canvas.height;
    //console.log(ctx.canvas.width + " " + ctx.canvas.height);
}

/**
 * Vector functions
 */
function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.id = posIdCounter++;
}

Vector.prototype.length = function() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
}

Vector.prototype.add = function(v) {
    return new Vector(this.x+v.x, this.y+v.y);
}

Vector.prototype.sub = function(v) {
    return new Vector(this.x-v.x, this.y-v.y);
}

Vector.prototype.mul = function(t) {
    return new Vector(this.x*t, this.y*t);
}

Vector.prototype.normalize = function() {
    return this.mul(1.0/this.length());
}

Vector.prototype.sqr_dist = function(v) {
    return (v.x-this.x)**2 + (v.y-this.y)**2;
}

Vector.prototype.dist = function(v) {
    return Math.sqrt(this.sqr_dist(v));
}

Vector.prototype.eq = function(v) {
    return (v.x == this.x && v.y == this.y);
}

Vector.prototype[Symbol.toPrimitive] = function(hint) {
    return this.x+", "+this.y;
    return this.id;
}


/**
 * Box functions
 */
function Box(x1, y1, x2, y2) {
    this.min = new Vector(Math.min(x1, x2), Math.min(y1, y2));
    this.max = new Vector(Math.max(x1, x2), Math.max(y1, y2));
}

Box.prototype.contains = function(p) {
    if (this.min.x < p.x && p.x < this.max.x
        && this.min.y < p.y && p.y < this.max.y)
        return true;
    return false;
}

Box.prototype.coversBox = function(b) {
    if (this.min.x <= b.min.x && b.max.x <= this.max.x &&
        this.min.y <= b.min.y && b.max.y <= this.max.y) {
        return true;
    }
    return false;
}

Box.prototype.overlaps = function(b) {
    if (this.max.x < b.min.x || b.max.x < this.min.x
        || this.max.y < b.min.y || b.max.y < this.min.y) {
        return false;
    }
    return true;
}

Box.prototype.crossesLine = function(a, b) {
    // line is completely out of range
    if (a.x < this.min.x && b.x < this.min.x)
        return false;
    if (a.y < this.min.y && b.y < this.min.y)
        return false;
    if (a.x > this.max.x && b.x > this.max.x)
        return false;
    if (a.y > this.max.y && b.y > this.max.y)
        return false;

    // vertical line goes through box
    if (a.x == b.x && this.min.x <= a.x && a.x <= this.max.x) {
        if (this.min.y < Math.max(a.y, b.y) && Math.min(a.y, b.y) < this.max.y) {
            return true;
        }
    }

    // calculate pitch and ceck if line crosses 
    let m = (b.y-a.y)/(b.x-a.x);
    let f = (x) => m*(x-a.x) + a.y;

    if (this.max.y < f(this.min.x) && this.max.y < f(this.max.x))
        return false;
    if (f(this.min.x) < this.min.y && f(this.max.x) < this.min.y)
        return false;
    return true;
}

/**
 * Circle functions
 */
function Circle(x, y, r) {
    this.center = new Vector(x, y);
    this.radius = r;
    this.outerBox = new Box(x-r, y-r, x+r, y+r);
    let tmp = r/2 * SQRT_2;
    this.innerBox = new Box(x-tmp, y-tmp, x+tmp, y+tmp);

    this.specialPoints = []
}

Circle.prototype.eq = function(c) {
    return this.center.eq(c.center) && this.radius == c.radius;
}

Circle.prototype.addSpecialPoint = function(p, blocking=false) {
    let v = p.sub(this.center);
    let rad = Math.atan2(v.y, v.x) + Math.PI;
    p.blocking = blocking;
    this.specialPoints.push([rad, p]);
}

Circle.prototype.contains = function(p, accuracy=1e-10) {
    if (!this.outerBox.contains(p)) {
        return false;
    }
    if (this.innerBox.contains(p)) {
        return true;
    }
    if (p.dist(this.center)+accuracy < this.radius) {
        return true;
    }
    return false;
}

Circle.prototype.coversCircle = function(c) {
    if (this.innerBox.coversBox(c.outerBox)) {
        return true;
    }
    
    return this.center.dist(c.center)+c.radius < this.radius;
}

Circle.prototype.crossingsWithLine = function(a, b) {
    // if ab doesn't cross outerBox it doesn't cross the circle
    if (!(this.outerBox.crossesLine(a, b)))
        return [Infinity, Infinity];
    // if ab crosses innerBox it crosses the circle
    //if (this.innerBox.crossesLine(a, b))
    //    return true;
    
    // calculate discriminant
    let d = a.sub(this.center);
    let absDist = d.length;
    let lineDir = b.sub(a).normalize();
    let diskr = (d.x * lineDir.x + d.y * lineDir.y)**2 - d.x**2 - d.y**2 + this.radius**2;

    if (diskr <= 0)
        return [Infinity, Infinity];
    
    let sqrt_diskr = Math.sqrt(diskr);
    let t1 = -d.x * lineDir.x - d.y * lineDir.y + sqrt_diskr;
    let t2 = -d.x * lineDir.x - d.y * lineDir.y - sqrt_diskr;

    if (t2 > t1)
        [t1, t2] = [t2, t1];
    return [t1, t2];
}

Circle.prototype.crossingsWithCircle = function(c) {
    if (!this.outerBox.overlaps(c.outerBox)) {
        return [];
    }

    let dist = c.center.sub(this.center);
    let absDist = dist.length();
    if (absDist == 0) {
        return [];
    }
    let x = (this.radius*this.radius + absDist*absDist - c.radius*c.radius)/(2*absDist);
    let y = this.radius*this.radius - x*x;

    if (y < 0) {
        return [];
    }
    if (y > 0) {
        y = Math.sqrt(y);
    }

    let ex = dist.mul(1/absDist);
    let ey = new Vector(-ex.y, ex.x);
    let q1 = this.center.add(ex.mul(x));

    if (y == 0) {  // one touch point
        return [q1];
    }

    q2 = q1.sub(ey.mul(y));
    q1 = q1.add(ey.mul(y));
    return [q1, q2];
}

Circle.prototype.outerTangentPoints = function(c2) {
    let c1 = this;
    
    if (c1.radius < c2.radius)
        c2.outerTangentPoints(c1);

    let dist = c2.center.sub(c1.center);
    let absDist = dist.length();
    let cosA = (c1.radius - c2.radius)/absDist;
    let sinA = Math.sqrt(1 - cosA*cosA);
    let v = dist.normalize();  // normalized distance vector
    let o1 = new Vector(v.x * cosA - v.y * sinA, v.x * sinA + v.y * cosA);
    let o2 = new Vector(v.x * cosA + v.y * sinA, -v.x * sinA + v.y * cosA);
   
    let p1 = c1.center.add(o1.mul(c1.radius))
    p1.circle = c1;
    let p2 = c1.center.add(o2.mul(c1.radius))
    p2.circle = c1;
    let q1 = c2.center.add(o1.mul(c2.radius))
    q1.circle = c2;
    let q2 = c2.center.add(o2.mul(c2.radius))
    q2.circle = c2;

    let d = absDist * sinA;

    return [[p1, q1, d], [p2, q2, d]]
}

Circle.prototype.innerTangentPoints = function(c2) {
    let c1 = this;

    let dist = c2.center.sub(c1.center);
    let absDist = dist.length();

    if (absDist <= c1.radius + c2.radius)
        return []

    let cosA = (c1.radius + c2.radius)/absDist;
    let sinA = Math.sqrt(1 - cosA*cosA);
    let v = dist.normalize();  // normalized distance vector
    let o1 = new Vector(v.x * cosA - v.y * sinA, v.x * sinA + v.y * cosA);
    let o2 = new Vector(v.x * cosA + v.y * sinA, -v.x * sinA + v.y * cosA);
   
    let p1 = c1.center.add(o1.mul(c1.radius))
    p1.circle = c1;
    let p2 = c1.center.add(o2.mul(c1.radius))
    p2.circle = c1;
    let q1 = c2.center.sub(o1.mul(c2.radius))
    q1.circle = c2;
    let q2 = c2.center.sub(o2.mul(c2.radius))
    q2.circle = c2;

    let d = absDist * sinA;

    return [[p1, q1, d], [p2, q2, d]]
}

Circle.prototype.getTangents = function(other) {
    let tangents = [...this.innerTangentPoints(other), ...this.outerTangentPoints(other)];
    return tangents;
}

function randomFloat(max) {
    return Math.random() * max;
}

function createRandomCircle(maxX, maxY, maxRadius) {
    let r = randomFloat(maxRadius);
    let x = randomFloat(maxX-2*r)+r;
    let y = randomFloat(maxY-2*r)+r;

    return new Circle(x, y, r);
}

/**
 * Helper functions
 */
const _top = 0;
const _parent = i => ((i + 1) >>> 1) - 1;
const _left = i => (i << 1) + 1;
const _right = i => (i + 1) << 1;
class PriorityQueue {
  /**
   * https://stackoverflow.com/a/42919752/20907645
   */

  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[_top];
  }
  push(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  pop() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > _top) {
      this._swap(_top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  replace(value) {
    const replacedValue = this.peek();
    this._heap[_top] = value;
    this._siftDown();
    return replacedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > _top && this._greater(node, _parent(node))) {
      this._swap(node, _parent(node));
      node = _parent(node);
    }
  }
  _siftDown() {
    let node = _top;
    while (
      (_left(node) < this.size() && this._greater(_left(node), node)) ||
      (_right(node) < this.size() && this._greater(_right(node), node))
    ) {
      let maxChild = (_right(node) < this.size() && this._greater(_right(node), _left(node))) ? _right(node) : _left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

function uniquify(list, eqFnc) {
    return list.filter((m, i) => i === list.findIndex(n => eqFnc(n, m)));
}

function tangentsAreEqual(t1, t2) {
    return (t1[0].eq(t2[0]) && t1[1].eq(t2[1])) || (t1[0].eq(t2[1]) && t1[1].eq(t2[0]));
}

/**
 * Algorithm
 */
function Pathfinder() {
    this.edges = new Set();
    this.path = [];
    this.cameFrom = new Dict((a, b) => a.eq(b));
    this.finished = false;
    this.costs = new Dict((a, b) => a.eq(b));
    this.current = undefined;
    this.nodesCount = 0;
}

Pathfinder.prototype.reset = function() {
    this.edges.clear();
    this.cameFrom.clear();
    this.costs.clear();
    this.finished = false;
    this.path.length = 0;
    this.current = undefined;
    this.nodesCount = 0;
    this.path.length = 0;

    circles.forEach(c => {
        delete c.expanded;
    });

}

function wayIsNotFree(c1, c2, k) {
    /** TODO
     *               +------+
     *             / |      |
     *               |      |
     *           /   +------+
     *
     *         /          /
     *      +---+
     *      |   |      /
     *      +---+
     *    /          /
     *
     * +------+   /
     * |      |
     * |      | /
     * +------+
     */
    let p = [new Vector(0, 0),  new Vector(0, 0)];
    let q = [new Vector(0, 0), new Vector(0, 0)];

    let b1 = c1.outerBox, b2 = c2.outerBox;
    
    if (c1.center.x <= c2.center.x) {
        if (c1.center.y <= c2.center.y) {
        }
    }
    if (c1.center.y > c2.center.y) {
        [p1.y, p2.y] = [p2.y, p1.y];
    }
    if (k.crossesLine(p1, p2)) {
    }
}

Pathfinder.prototype.expandCircle = function(c) {
    tangents = []

    circles.forEach(k => {
        if (k !== c) {
            if (k.hasOwnProperty("expanded")) {
                console.log("Skipped circle");
                return;
            }
            // TODO: first check if the way is completely non-free
            tangents.push(...c.getTangents(k));
        }
    });

    // filter out all tangents of which points are inside circles
    tangents = tangents.filter(t => {
        return !circles.some(c => {
            return (c.contains(t[0]) || c.contains(t[1]))
        });
    });
    // filter out all tangents that crosses circles
    tangents = tangents.filter( t => {
        const crossings = circles.some(c => {
            if (c == t[0].circle || c == t[1].circle)
                return false;

            let [t1, t2] = c.crossingsWithLine(t[0], t[1]);
            let d = t[2];
            if ((0 < t1 && t1 < d) || (0 < t2 && t2 < d)) {
                return true;
            }
            return false;
        });
        return !crossings;
    });

    tangents = uniquify(tangents, tangentsAreEqual);
    tangents.forEach(t => {
        t[0].circle.addSpecialPoint(t[0]);
        t[1].circle.addSpecialPoint(t[1]);
    });

    tangents.forEach(t => {
        let [p1, p2, d] = t;
        this.edges.add(t);
        this.edges.add([p2, p1, d]);
    });

}

Pathfinder.prototype.expandNode = function(pos) {
    // find all nodes reachable from pos
    if (!pos.hasOwnProperty("circle")) {
        return;
    }
    let circle = pos.circle;
    if (circle.hasOwnProperty("expanded")) {
        return;
    }
    this.expandCircle(circle);
    circle.expanded = true;
    if (circle.specialPoints.length <= 1) {
        return;
    }
    // connect points on circle
    circle.specialPoints = circle.specialPoints.sort((s1, s2) => s1[0]-s2[0]);
    for (let i=0; i<circle.specialPoints.length-1; i++) {
        let [rad1, p1] = circle.specialPoints[i];
        let [rad2, p2] = circle.specialPoints[i+1];
        let dist = (rad2 -rad1) * circle.radius;
        if (p1.blocking || p2.blocking) {
            continue;
        }
        this.edges.add([p1, p2, dist]);
        this.edges.add([p2, p1, dist]);
    }
    // connect first and last point
    let [rad1, p1] = circle.specialPoints[circle.specialPoints.length-1];
    let [rad2, p2] = circle.specialPoints[0];
    if (!p1.blocking && ! p2.blocking) {
        let dist = ((2*Math.PI - rad1) + rad2) * circle.radius;
        this.edges.add([p1, p2, dist]);
        this.edges.add([p2, p1, dist]);
    }
}

Pathfinder.prototype.initSearch = function() {
    this.reset();
    this.openList = new PriorityQueue((a, b) => a[0] < b[0]);
    this.openList.push([0, start]);
    this.cameFrom.set(start, null);
    this.costs.set(start, 0);
}

Pathfinder.prototype.next = function() {
    if (this.openList.isEmpty()) {
        this.finished = true;
        this.current = start;
        this.path.length = 0;
        return -1;
    }
    let [fScore, current] = this.openList.pop();
    this.current = current;
    this.nodesCount++;

    if (current.eq(end)) {
        this.constructPath(start, end);
        this.finished = true;
        return this.costs.get(end);
    }

    this.expandNode(current);
    
    for (let e of this.edges) {
        let [m, neighbour, dist] = e;
        if (!m.eq(current)) {
            continue;
        }
        let tentativeCosts = this.costs.get(current) + dist;
        if (this.costs.get(neighbour, Infinity) <= tentativeCosts) {
            continue;
        }
        this.cameFrom.set(neighbour, current);
        this.costs.set(neighbour, tentativeCosts);
        this.openList.push([tentativeCosts + neighbour.dist(end), neighbour]);
    }
    this.finished = false;
}

Pathfinder.prototype.aStar = function() {
    let openList = new PriorityQueue((a, b) => a[0] < b[0]);
    openList.push([0, start]);
    this.cameFrom.clear();
    this.cameFrom.set(start, null);
    let costs = new Dict((a, b) => a.eq(b));
    costs.set(start, 0);

    while (!openList.isEmpty()) {
        let [fScore, current] = openList.pop();
        if (current.eq(end)) {
            return [true, this.cameFrom, costs.get(end)];
        }

        this.expandNode(current);
        
        for (let e of this.edges) {
            let [m, neighbour, dist] = e;
            if (!m.eq(current)) {
                continue;
            }
            let tentativeCosts = costs.get(current) + dist;
            if (costs.get(neighbour, Infinity) <= tentativeCosts) {
                continue;
            }
            this.cameFrom.set(neighbour, current);
            costs.set(neighbour, tentativeCosts);
            openList.push([tentativeCosts + neighbour.dist(end), neighbour]);
        }
    }
    return [false, {}, -1];
}

Pathfinder.prototype.constructPath = function(start, end) {
    if (end == undefined) {
        return [];
    }
    this.path.length = 0;
    let curr = end;
    while (curr !== null) {
        this.path.push(curr);
        curr = this.cameFrom.get(curr);
    }
    return this.path;
}


function updateCircleCrossings(c) {
    c.specialPoints.length = 0;

    circles.forEach(k => {
        let crossings = c.crossingsWithCircle(k);
        crossings.forEach(p => {
            if (circles.some(c => c.contains(p))) {
                return;
            }
            c.addSpecialPoint(p, true);
            k.addSpecialPoint(p, true);
        });
    });
    
    c.specialPoints = c.specialPoints.filter(s => {
        let [r, p] = s;
        return !circles.some(o => {
            return o.contains(p);
        });
    });
    c.specialPoints = uniquify(c.specialPoints, (s1, s2) => s1[1].eq(s2[1]));

    console.log(c.specialPoints);

}

function updateStart(x, y) {
    start.x = x;
    start.y = y;
    updateCircleCrossings(start_circle);
    circleListModified = true;
}

function updateEnd(x, y) {
    end.x = x;
    end.y = y;
    updateCircleCrossings(end_circle);
    circleListModified = true;
}

function addCircle(c) {
    /* Performance of this sucks
    // if circle is completely covered by another circle drop it
    let covered = circles.some(k => {
        return k.coversCircle(c);
    });
    if (covered) {
        console.log("Dropped:");
        console.log(c);
        return;
    }
    // remove circles that are completely covered by c
    let i = 0;
    while (i < circles.length) {
        let k =  circles[i];
        let covered = c.coversCircle(k);
        if (covered) {
            console.log("Dropping:");
            console.log(k);
            removeCircle(i);
        } else {
            i++;
        }
    }
    */
    updateCircleCrossings(c);
    circles.push(c);
    circleListModified = true;
}

function removeCircle(idx) {
    if (idx < 2) {
        console.log("Can't remove start or end point");
        return;
    }
    let c = circles[idx];
    circles.splice(idx, 1);

    c.specialPoints.forEach(s => {
        let [r, p] = s;
        circles.forEach(k => {
            if (k.specialPoints.find(q => q[1].eq(p)) !== -1) {
                updateCircleCrossings(k);
            }
        });
    });
    delete c;
    circleListModified = true;
}

function clearCircles() {
    circles.length = 2;
    circleListModified = true;
}

/**
 * Drawing Functions
 */

function CircleField(ctx) {
    this.ctx = ctx;

    this.clear = function() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    this.drawCircle = function(c, fillStyle=colors.normal) {
        this.ctx.lineWidth = 0.3;

        /*
         circles.forEach(c => {
            if (!c.hasOwnProperty("expanded")) {
                return;
            }
            circleField.drawCircle(c);
        });
        */
        if (c.hasOwnProperty("expanded")) {
            this.ctx.fillStyle = colors.visited;
            this.ctx.strokeStyle = colors.border_visited;
        } else {
            this.ctx.fillStyle = colors.normal;
            this.ctx.strokeStyle = colors.border_normal;
        }
        this.ctx.beginPath();
        if (c.hasOwnProperty("start")) {
            ctx.fillStyle = colors.start;
            this.ctx.arc(c.center.x, c.center.y, 5, 0, 2*Math.PI);
        } else if (c.hasOwnProperty("end")) {
            ctx.fillStyle = colors.end;
            this.ctx.arc(c.center.x, c.center.y, 5, 0, 2*Math.PI);
        } else {
            this.ctx.arc(c.center.x, c.center.y, c.radius, 0, 2*Math.PI);
        }
        this.ctx.stroke();
        this.ctx.fill();

        //c.specialPoints.forEach(s => this.drawPoint(s[1], 2, "#ff0000"));
    }

    this.drawPoint = function(pos, size=5, fillStyle="#00ff00") {
        this.ctx.fillStyle = fillStyle;
        this.lineWidth = 0.5;
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, size, 0, 2*Math.PI);
        this.ctx.stroke();
        this.ctx.fill();
    }

    this.drawLine = function(a, b, strokeStyle="#777777", lineWidth=0.3) {
        this.ctx.strokeStyle = strokeStyle;
        this.ctx.lineWidth = lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(a.x, a.y);
        this.ctx.lineTo(b.x, b.y);
        this.ctx.stroke();
    }

    this.drawCircles = function() {
        circles.forEach(c => circleField.drawCircle(c));
        //this.drawPoint(start);
        //this.drawPoint(end);
    }

    this.drawConnection = function(p1, p2, strokeStyle) {
        this.ctx.beginPath();
        if (!p1.circle.eq(p2.circle)) {
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.stroke();
            return;
        }
        let circle = p1.circle;

        let u1 = p1.sub(circle.center);
        let u2 = p2.sub(circle.center);
        let a1 = Math.atan2(u1.y, u1.x);
        let a2 = Math.atan2(u2.y, u2.x);

        let edge = null;
        for (const e of pathFinder.edges.values()) {
            if (e[0].eq(p1) && e[1].eq(p2)) {
                edge = e;
            }
        }
        if (edge === null) {
            return;
        }

        let realDist = edge[2];
        if (Math.abs((a1-a2)*circle.radius - realDist) < 1e-10) {
            [a1, a2] = [a2, a1];
        }
        
        this.ctx.arc(
            circle.center.x,
            circle.center.y,
            circle.radius,
            a1,
            a2
        );
        this.ctx.stroke();
    }

    this.drawPath =  function(path=null) {
        if (path === null) {
            path = pathFinder.path;
        }
        if (path.length < 2) {
            return;
        }
        this.ctx.strokeStyle = colors.path;
        this.ctx.lineWidth = 2;
        for (let i=0; i<path.length-1; i++) {
            this.drawConnection(path[i], path[i+1], colors.path);
        }
    }

    this.resetCircles = function() {
        circles.forEach(c => {
            c.specialPoints = c.specialPoints.filter(s => s[1].blocking);
            delete c.expanded;
        });
        circleListModified = false;
    }

    this.update = function() {
        this.clear();

        updateStats();
        this.drawCircles();
        if (!circleListModified) {
            // edges
            if (document.getElementById("show_edges").checked) {
                pathFinder.edges.forEach(t => {
                    circleField.drawLine(t[0], t[1], colors.edges, 0.1);
                });
            }
            // nodes in sight
            if (document.getElementById("show_sighted").checked) {
                pathFinder.cameFrom.forEach((to, from) => {
                    if (from === null) {
                        return;
                    }
                    var grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
                    grad.addColorStop(0, colors.start);
                    grad.addColorStop(1, colors.end);

                    circleField.drawLine(from, to, grad, 0.2);
                });
            }
            
            // path
            if (document.getElementById("show_path").checked) {
                if (!pathFinder.finished) {
                    console.log(pathFinder.current);
                    pathFinder.constructPath(start, pathFinder.current)
                }
                circleField.drawPath();
            }
        }

    }


}

/**
 * GUI functions
 */
function generateRandomCircles() {


    let maxRadius = parseFloat(document.getElementById("max_radius").value)
    let count = parseInt(document.getElementById("count").value)

    circles.length = 2;

    for (let i=0; i<count; i++) {
        let c = createRandomCircle(ctx.canvas.width, ctx.canvas.height, maxRadius);
        console.log(c);
        addCircle(c);
    }
}

document.getElementById("generate_button").onclick = function() {
    pathFinder.reset();
    generateRandomCircles();
    circleField.update();
};


function updateColors() {
    console.log("Update colors");
    colors = {
        normal: document.getElementById("color_normal").value,
        border_normal: document.getElementById("color_border_normal").value,
        visited: document.getElementById("color_visited").value,
        border_visited: document.getElementById("color_border_visited").value,
        path: document.getElementById("color_path").value,
        start: document.getElementById("color_start").value,
        end: document.getElementById("color_end").value,
        edges: document.getElementById("color_edges").value,
    }
    circleField.update();
}

function updateAnimationSpeed() {
    animationSpeed = parseInt(document.getElementById("animation_speed").value);
    console.log(animationSpeed);
}

function updateJson() {
    let lst = [];
    circles.forEach(c => {
        if (c.hasOwnProperty("start") || c.hasOwnProperty("end")) {
            return;
        }
        let s = "{\n";
        s += "  \"x\": "+c.center.x+",\n";
        s += "  \"y\": "+c.center.y+",\n";
        s += "  \"radius\": "+c.radius + "\n";
        s += "}";
        lst.push(s);
    });
    json.value = "{\n";
    json.value += "\"start\": {\"x\": " + start.x + ", \"y\": " + start.y + "},\n";
    json.value += "\"end\": {\"x\": " + end.x + ", \"y\": " + end.y + "},\n";
    json.value +="\"circles\": [" + lst.join(",\n") + "]\n";
    json.value += "}";
    console.log("update json");
}

function submitJson() {
    try {
        let tmp = JSON.parse(json.value);
        clearCircles();
        updateStart(tmp.start.x, tmp.start.y);
        updateEnd(tmp.end.x, tmp.end.y);
        tmp.circles.forEach(c => {
            console.log(c.x);
            addCircle(new Circle(c.x, c.y, c.radius));
        });
        circleField.update();

    } catch (e) {
        console.log(e);
    }
}

document.getElementById("circles_json_reset").onclick = updateJson;
document.getElementById("circles_json_submit").onclick = submitJson;

document.getElementById("color_normal").onchange = updateColors;
document.getElementById("color_border_normal").onchange = updateColors;
document.getElementById("color_visited").onchange = updateColors;
document.getElementById("color_border_visited").onchange = updateColors;
document.getElementById("color_path").onchange = updateColors;
document.getElementById("color_start").onchange = updateColors;
document.getElementById("color_end").onchange = updateColors;
document.getElementById("color_edges").onchange = updateColors;

function updateCircleField() {
    circleField.update();
}
document.getElementById("show_path").onclick = updateCircleField;
document.getElementById("show_edges").onclick = updateCircleField;
document.getElementById("show_sighted").onclick = updateCircleField;

document.getElementById("animation_speed").onchange = updateAnimationSpeed;

document.getElementById("next_iteration").onclick = searchIteration;

document.getElementById("dimensions_width").onchange = function() {
    canvas.width = parseInt(document.getElementById("dimensions_width").value);
    circleField.update();
}
document.getElementById("dimensions_height").onchange = function() {
    canvas.height = parseInt(document.getElementById("dimensions_height").value);
    circleField.update();
}

function getInfoString(c) {
    if (c === undefined) {
        return "undefined";
    }
    let s = "";
    s += "<div><span class=\"caption\">Center</span><span class=\"value\">"+c.center+"</span></div>";
    s += "<div><span class=\"caption\">Radius</span><span class=\"value\">"+c.radius+"</span></div>";
    s += "<div><span class=\"caption\">Expanded</span><span class=\"value\">"+c.hasOwnProperty("expanded") + "</span></div>";
    s += "<table class=\"special_points\">";
    s += "<tr>";
    s += "<th>Angle</th>";
    s += "<th>Position</th>";
    s += "<th>Blocking</th>";
    s += "</tr>";
    c.specialPoints.forEach(sp => {
        s += "<tr>";
        s += "<td>" + sp[0] + "</td>";
        s += "<td>" + sp[1] + "</td>";
        s += "<td>" + sp[1].blocking + "</td>";
        s += "</tr>";
    });
    s += "</table>";
    return s;
}

canvas.onclick = function(e) {
    //const rect = e.target.getBoundingClientRect();
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (document.getElementById("set_start").checked) {
        updateStart(x, y);
    } else if (document.getElementById("set_end").checked) {
        updateEnd(x, y);
    } else if (document.getElementById("add_circle").checked) {
        let r = parseFloat(document.getElementById("circle_radius").value);
        addCircle(new Circle(x, y, r));
    } else if (document.getElementById("remove_circle").checked) {
        let i = circles.findLastIndex(k => k.contains(new Vector(x, y)));
        if (i > 1) {  // first two entries are start and end
            removeCircle(i);
        }
    } else {
        let c = circles.findLast(k => k.contains(new Vector(x, y)));
        document.getElementById("details").innerHTML = getInfoString(c);
        console.log(c);
    }
    circleField.update();
};

document.getElementById("clear_button").onclick = function(e) {
    clearCircles();
    pathFinder.reset();
    circleField.update();
}

function searchIteration() {
    if (circleListModified) {
        return;
    }
    if (pathFinder.finished) {
        circleField.update();
        return;
    }
    /*if (animationSpeed == MAX_TIME) {
        while (!pathFinder.finished) {
            pathFinder.next();
        }
        circleField.update();
        return;
    }
    */
    pathFinder.next();
    if (animationSpeed < MAX_TIME) {
        circleField.update();
    } else if (pathFinder.nodesCount % 100 === 0) {
        circleField.update();
    }
    if (animationSpeed > 0) {
        timer = setTimeout(searchIteration, MAX_TIME-animationSpeed);
    }
}

document.getElementById("find_path_button").onclick = function(e) {
    circleListModified = false;
    circleField.resetCircles();
    let t = pathFinder.initSearch();
   
    searchIteration();

    return;
    
    //return;
    console.log(pathFinder.path);

    circleField.update();
}

function updateStats() {
    let iterations = document.getElementById("stats_iterations");
    let edges_calculated = document.getElementById("stats_edges_calculated");
    let edges_sighted = document.getElementById("stats_edges_sighted");
    let circle_count = document.getElementById("stats_circles");
    let circles_expanded = document.getElementById("stats_circles_expanded");
    let path_length = document.getElementById("stats_path_length");
    let path_nodes = document.getElementById("stats_path_nodes");
    let search_running = document.getElementById("stats_search_running");
    let search_success = document.getElementById("stats_search_success");

    search_running.innerHTML = pathFinder.finished ? "Search finished" : "Searching";
    search_success.innerHTML = pathFinder.path.length == 0 ? "Not successful" : "successfull";

    iterations.innerHTML = pathFinder.nodesCount;
    edges_calculated.innerHTML = pathFinder.edges.size;
    edges_sighted.innerHTML = pathFinder.cameFrom.size();
    circle_count.innerHTML = circles.length-2;
    circles_expanded.innerHTML = circles.filter(c => c.hasOwnProperty("expanded")).length;
    path_length.innerHTML = pathFinder.costs.get(pathFinder.current, -1);
    path_nodes.innerHTML = pathFinder.path.length;
    console.log(pathFinder.path);

}
