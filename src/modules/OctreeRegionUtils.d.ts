import OctreeNode from "./OctreeNode";
import Region from './Region';

export declare function visualize(Region: Region): BasePart;

export declare function create(PosX: number, PosY: number, PosZ: number, SizeX: number, SizeY: number, SizeZ: number, Parent: Region, ParentIndex: number): Region;

export declare function addNode(LowestSubregion: Region, Node: OctreeNode): void;

export declare function moveNode(FromLowest: Region, ToLowest: Region, Node: OctreeNode): void;
    
export declare function removeNode(LowestSubregion: Region, Node: OctreeNode): void;

export declare function getSearchRadiusSquared(Radius: number, Diameter: number, Epsilon: number): number;

export declare function getNeighborsWithinRadius(Region: Region, Radius: number, PosX: number, PosY: number, PosZ: number, ObjectsFound: Instance[], NodeDistances2: OctreeNode[], MaxDepth: number): void;

export declare function getOrCreateSubRegionAtDepth(Region: Region, PosX: number, PosY: number, PosZ: number, MaxDepth: number): Region;

export declare function createSubRegion(Parent: Region, ParentIndex: number): Region;

export declare function inRegionBounds(Region: Region, PosX: number, PosY: number, PosZ: number): boolean;

export declare function getSubRegionIndex(Region: Region, PosX: number, PosY: number, PosZ: number): number;

export declare function getTopLevelRegionHash(CX: number, CY: number, CZ: number): number;

export declare function getTopLevelRegionCellIndex(MaxRegionSize: [number, number, number], PosX: number, PosY: number, PosZ: number): LuaTuple<[number, number, number]>;

export declare function getTopLevelRegionPosition(MaxRegionSize: [number, number, number], CX: number, CY: number, CZ: number): LuaTuple<[number, number, number]>;

export declare function areEqualTopRegions(Region: Region, RegionPosX: number, RegionPosY: number, RegionPosZ: number): boolean;

export declare function findRegion(RegionHashMap: number, MaxRegionSize: [number, number, number], PosX: number, PosY: number, PosZ: number): Region | undefined;

export declare function getOrCreateRegion(RegionHashMap: number, MaxRegionSize: [number, number, number], PosX: number, PosY: number, PosZ: number): Region;