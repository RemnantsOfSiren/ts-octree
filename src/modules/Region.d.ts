interface Region {
    size: [number, number, number];
    position: [number, number, number];
    depth: number;
    lowerBounds: [number, number, number];
    upperBounds: [number, number, number];
}

export = Region;