import Region from './region';
export default interface DCEFrame {
    canvas: HTMLCanvasElement | OffscreenCanvas;
    data: Uint8Array | Uint8ClampedArray;
    region: Region;
    sx: number;
    sy: number;
    width: number;
    height: number;
    timeSpent: number;
    timeStamp: number;
}
//# sourceMappingURL=DCEFrame.d.ts.map