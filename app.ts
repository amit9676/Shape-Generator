//shape, size and type selector

//shape selector
let shape: number;
shape = +prompt(`Wellcome to the best shape simulator ever!
Please select desired shape:
1) Square
2) Rectangle
3) Triangle`);

if ((shape == 1) || (shape == 2) || (shape == 3)) {
    size(shape);
}
else
{
    document.write("Error. please select 1 or 2 or 3 for the shape type.");
}

// --------------------------------------------------------------------------

//size selector
function size(shape: number): void
{
    let sizeA: number;
    let sizeB = 1;
    if (shape == 1) {
        sizeA = +(prompt("Please enter square side length"));
    }
    else if (shape == 2) {
        sizeA = +(prompt("Please enter rectangle width"));
        if ((sizeA % 1 == 0) && (sizeA > 0)) {
            sizeB = +(prompt("Please enter rectangle height"));
        }
        else
        {
            document.write("Error. please enter a positive integer number.");
            return;
        }
    }
    else if (shape == 3) {
        sizeA = +(prompt("Please enter triangle side length"));
    }

    if ((sizeA % 1 == 0) && (sizeA > 0) && (sizeB % 1 == 0) && (sizeB > 0))
    {
        content(sizeA, sizeB, shape);
    }
    else {
        document.write("Error. please enter a positive integer number.");
    }
}
//

//content selector
function content(sizeA: number, sizeB: number, shape: number): void {
    let objectContent: number;

    objectContent = +(prompt(`Please select Shape content
    1) * * * * *
    2) *         *
    3) 1 2 3 4 5 
    4) 5 4 3 2 1`));

    if (shape == 1) {
        if (objectContent == 1) {
            fullAstriskSquareGenerator(sizeA);
            return;
        }
        if (objectContent == 2) {
            emptyAstriskSquareGenerator(sizeA);
            return;
        }
        if (objectContent == 3) {
            ascendingOrderSquareGenerator(sizeA);
            return;
        }
        if (objectContent == 4) {
            descendingOrderSquareGenerator(sizeA);
            return;
        }
        else {
            document.write("Error. please select 1 or 2 or 3 or 4 for the shape content.");
        }
    }
    else if (shape == 2)
    {
        if (objectContent == 1)
        {
            fullAstriskRectangleGenerator(sizeA, sizeB);
            return;
        }
        else if (objectContent == 2) {
            emptyAstriskRectangleGenerator(sizeA, sizeB);
            return;
        }

        else if (objectContent == 3) {
            ascendingOrderRectangleGenerator(sizeA, sizeB);
            return;
        }
        else if (objectContent == 4) {
            descendingOrderRectangleGenerator(sizeA, sizeB);
            return;
        }
        else
        {
            document.write("Error. please select 1 or 2 or 3 or 4 for the shape content.");
        }
    }
    else if (shape == 3)
    {
        if (objectContent == 1) {
            fullAstriskTriangleGenerator(sizeA);
            return;
        }
        if (objectContent == 2) {
            emptyAstriskTriangleGenerator(sizeA);
            return;
        }
        if (objectContent == 3) {
            ascendingOrderTriangleGenerator(sizeA);
            return;
        }
        if (objectContent == 4) {
            descendingOrderTriangleGenerator(sizeA);
            return;
        }
        else {
            document.write("Error. please select 1 or 2 or 3 or 4 for the shape content.");
        }
    }
}
//

// ------------------------------------------------------------

// square generator
function fullAstriskSquareGenerator(size: number): void
{
    for (let i = 1; i <= size; i++)
    {
        for (let j = 1; j <= size; j++)
        {
            document.write("* &nbsp");
        }
        document.write("<br>");
    }

    squarePeriAndArea(size);
}

function emptyAstriskSquareGenerator(size: number): void {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++)
        {
            if ((i == 1) || (i == size) || (j == 1) || (j == size)) {
                document.write("* &nbsp");
            }
            else
            {
                document.write("&nbsp &nbsp");
            }
        }
        document.write("<br>");
    }

    squarePeriAndArea(size);
}

function ascendingOrderSquareGenerator(size: number): void {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            document.write(j + " ");
        }
        document.write("<br>");
    }
    squarePeriAndArea(size);
}

function descendingOrderSquareGenerator(size: number): void {
    for (let i = size; i >= 1; i--) {
        for (let j = size; j >= 1; j--) {
            document.write(j + " ");
        }
        document.write("<br>");
    }

    squarePeriAndArea(size);
}
//

// -----------------------------------------------------------

// rectangle generator

function fullAstriskRectangleGenerator(sizeA: number, sizeB: number): void {
    for (let i = 1; i <= sizeB; i++) {
        for (let j = 1; j <= sizeA; j++)
        {
            document.write("* &nbsp");
        }
        document.write("<br>");
    }

    rectanglePeriAndArea(sizeA, sizeB);
}

function emptyAstriskRectangleGenerator(sizeA: number, sizeB: number): void {
    for (let i = 1; i <= sizeB; i++) {
        for (let j = 1; j <= sizeA; j++) {
            if ((i == 1) || (i == sizeB) || (j == 1) || (j == sizeA)) {
                document.write("* &nbsp");
            }
            else {
                document.write("&nbsp &nbsp");
            }
        }
        document.write("<br>");
    }

    rectanglePeriAndArea(sizeA, sizeB);
}

function ascendingOrderRectangleGenerator(sizeA: number, sizeB: number): void {
    for (let i = 1; i <= sizeB; i++) {
        for (let j = 1; j <= sizeA; j++) {
            document.write(j + " ");
        }
        document.write("<br>");
    }

    rectanglePeriAndArea(sizeA, sizeB);
}

function descendingOrderRectangleGenerator(sizeA: number, sizeB: number): void {
    for (let i = sizeB; i >= 1; i--) {
        for (let j = sizeA; j >= 1; j--) {
            document.write(j + " ");
        }
        document.write("<br>");
    }

    rectanglePeriAndArea(sizeA, sizeB);
}
//

// -----------------------------------------------------------

// triangle generator


function fullAstriskTriangleGenerator(size: number): void {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("* &nbsp");
        }
        document.write("<br>");
    }

    trianglePeriAndArea(size);
}

function emptyAstriskTriangleGenerator(size: number): void {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= i; j++) {
            if ((i == 1) || (i == size) || (j == 1) || (j == i)) {
                document.write("* &nbsp");
            }
            else {
                document.write("&nbsp &nbsp");
            }
        }
        document.write("<br>");
    }

    trianglePeriAndArea(size);
}

function ascendingOrderTriangleGenerator(size: number): void {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j + " ");
        }
        document.write("<br>");
    }

    trianglePeriAndArea(size);
}

function descendingOrderTriangleGenerator(size: number): void {
    for (let i = size; i >= 1; i--) {
        for (let j = size; j >= i; j--) {
            document.write(j + " ");
        }
        document.write("<br>");
    }

    trianglePeriAndArea(size);
}
//

// ------------------------------------------------------

//perimeter and area
function squarePeriAndArea(size: number)
{
    document.write("<br><br>");
    document.write("Square Perimeter:" + (size * 4) + "<br>");
    document.write("Square Area:" + (size * size) + "<br>");
}

function rectanglePeriAndArea(sizeA: number, sizeB: number) {
    document.write("<br><br>");
    document.write("Rectangle Perimeter:" + ((sizeA * 2) + (sizeB * 2)) + "<br>");
    document.write("Rectangle Area:" + (sizeA * sizeB) + "<br>");
}

function trianglePeriAndArea(size: number) {
    document.write("<br><br>");
    document.write("Triangle Perimeter:" + ((size + size + (Math.sqrt(2) * size)).toFixed(2)) + "<br>");
    document.write("Triangle Area:" + (size * size / 2) + "<br>");
}
//