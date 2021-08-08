import OctreeNode from "./modules/OctreeNode";
import Region from './modules/Region';

declare class Octree {
	constructor(maxSize?: number);

	GetAllNodes(): OctreeNode[];

	CreateNode(Position: Vector3, Object: Instance): OctreeNode;

	RadiusSearch(Position: Vector3, Radius: number): LuaTuple<[Instance[], number[]]>;

	KNearestNeighborsSearch(): LuaTuple<[Instance[], number[]]>;

	GetOrCreateLowestSubRegion(px: number, py: number, pz: number): Region;
}

export = Octree;