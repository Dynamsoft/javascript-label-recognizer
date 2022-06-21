import CameraEnhancer from "./class/cameraenhancer";
declare class DCE {
    /**
         * The `BarcodeReader` class is used for image decoding
         * Comparing to `BarcodeScanner`, the default decoding settings are more accurate but slower.
         * ```js
         * let pReader = null;
         * (async()=>{
         *     let reader = await (pReader = pReader || Dynamsoft.DBR.BarcodeReader.createInstance());
         *     let results = await reader.decode(imageSource);
         *     for(let result of results){
         *         console.log(result.barcodeText);
         *     }
         * })();
         * ```
         */
    static CameraEnhancer: typeof CameraEnhancer;
    /** @ignore */
    static get browserInfo(): any;
    /**
     * Get the current version.
    */
    static getVersion(): string;
    /**
     * Detect environment and get a report.
     * ```js
     * console.log(Dynamsoft.DBR.detectEnvironment());
     * // {"wasm":true, "worker":true, "getUserMedia":true, "camera":true, "browser":"Chrome", "version":90, "OS":"Windows"}
     * ```
     */
    static detectEnvironment(): Promise<any>;
    static get engineResourcePath(): string;
    /**
     * Specify the Barcode Reader SDK engine (WASM) url. The SDK tries to automatically explore the engine location.
     * If the auto-explored engine location is incorrect, you can manually specify the engine location.
     * The property needs to be set before [[loadWasm]].
     * ```js
     * Dynamsoft.DBR.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer@2.0.3/dist/";
     * await Dynamsoft.DBR.loadWasm();
     * ```
    */
    static set engineResourcePath(value: string);
    /** @ignore */
    static get _onLog(): (message: any) => void;
    /** @ignore */
    static set _onLog(value: (message: any) => void);
}
export { DCE, CameraEnhancer, };
export default DCE;
//# sourceMappingURL=dce.d.ts.map