import Octree from '../index';

declare class OctreeNode {
    constructor(Octree: Octree, Object: Instance);
    
    KNearestNeighborsSearch(): LuaTuple<[Instance[], number[]]>;

    GetObject(): Instance;

    RadiusSearch(Radius: number): LuaTuple<[Instance[], number[]]>;

    GetPosition(): Vector3;

    GetRawPosition(): LuaTuple<[number, number, number]>;

    SetPosition(Position: Vector3): void;

    Destroy(): void;
}

export = OctreeNode;