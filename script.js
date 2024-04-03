document.addEventListener('DOMContentLoaded', function () {
  const polylines = document.querySelectorAll('.polyLine');
  const circles = document.querySelectorAll('[class^="circle"]');

  const pointsArray = [];

  function getPoints() {
    polylines.forEach((polyline, index) => {
      const totalLength = polyline.getTotalLength();
      const points = [];
      for (let i = 0; i < totalLength; i += 5) {
        const point = polyline.getPointAtLength(i);
        points.push({ x: point.x, y: point.y });
      }
      pointsArray.push(points);
    });
  }

  function moveCircle1(index) {
    const points = pointsArray[0];
    const circle = circles[0];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle1(index + 1), 50);
    } else {
      setTimeout(() => moveCircle1(0), 50);
    }
  }

  function moveCircle2(index) {
    const points = pointsArray[1];
    const circle = circles[1];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle2(index + 1), 50);
    } else {
      setTimeout(() => moveCircle2(0), 50);
    }
  }

  function moveCircle3(index) {
    const points = pointsArray[2];
    const circle = circles[2];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle3(index + 1), 50);
    } else {
      setTimeout(() => moveCircle3(0), 50);
    }
  }
  function moveCircle4(index) {
    const points = pointsArray[3];
    const circle = circles[3];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle4(index + 1), 50);
    } else {
      setTimeout(() => moveCircle4(0), 50);
    }
  }
  function moveCircle5(index) {
    const points = pointsArray[4];
    const circle = circles[4];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle5(index + 1), 50);
    } else {
      setTimeout(() => moveCircle5(0), 50);
    }
  }
  function moveCircle6(index) {
    const points = pointsArray[5];
    const circle = circles[5];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle6(index + 1), 50);
    } else {
      setTimeout(() => moveCircle6(0), 50);
    }
  }
  function moveCircle7(index) {
    const points = pointsArray[6];
    const circle = circles[6];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle7(index + 1), 50);
    } else {
      setTimeout(() => moveCircle7(0), 50);
    }
  }
  function moveCircle8(index) {
    const points = pointsArray[7];
    const circle = circles[7];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle8(index + 1), 50);
    } else {
      setTimeout(() => moveCircle8(0), 50);
    }
  }
  function moveCircle9(index) {
    const points = pointsArray[8];
    const circle = circles[8];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle9(index + 1), 50);
    } else {
      setTimeout(() => moveCircle9(0), 50);
    }
  }

  function moveCircle10(index) {
    const points = pointsArray[9];
    const circle = circles[9];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle10(index + 1), 50);
    } else {
      setTimeout(() => moveCircle10(0), 50);
    }
  }
  function moveCircle11(index) {
    const points = pointsArray[10];
    const circle = circles[10];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle11(index + 1), 50);
    } else {
      setTimeout(() => moveCircle11(0), 50);
    }
  }
  function moveCircle12(index) {
    const points = pointsArray[11];
    const circle = circles[11];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle12(index + 1), 50);
    } else {
      setTimeout(() => moveCircle12(0), 50);
    }
  }
  function moveCircle13(index) {
    const points = pointsArray[12];
    const circle = circles[12];
    const point = points[index];
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    if (index < points.length - 1) {
      setTimeout(() => moveCircle13(index + 1), 50);
    } else {
      setTimeout(() => moveCircle13(0), 50);
    }
  }

  getPoints();
  moveCircle1(0);
  setTimeout(() => moveCircle2(0), 1500);
  setTimeout(() => moveCircle3(0), 3000);
  setTimeout(() => moveCircle4(0), 4500);

  setTimeout(() => moveCircle5(0), 5500);
  setTimeout(() => moveCircle6(0), 5500);
  setTimeout(() => moveCircle7(0), 5500);
  setTimeout(() => moveCircle8(0), 5500);
  setTimeout(() => moveCircle9(0), 5500);

  setTimeout(() => moveCircle10(0), 4500);
  setTimeout(() => moveCircle11(0), 3000);
  setTimeout(() => moveCircle12(0), 1500);
  moveCircle13(0);
});
