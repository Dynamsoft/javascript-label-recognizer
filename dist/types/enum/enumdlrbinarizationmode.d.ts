/**
* @enum DLRBinarizationMode
*
* Describes the binarization mode.
*
*/
export declare enum EnumDLRBinarizationMode {
    /**Not supported yet. */
    BM_AUTO = 1,
    /**Binarizes the image based on the local block. Check @ref BM for available argument settings.*/
    BM_LOCAL_BLOCK = 2,
    /**Performs image binarization based on the given threshold. Check @ref BM for available argument settings.*/
    BM_THRESHOLD = 4,
    /**Reserved setting for binarization mode.*/
    BM_REV = 2147483648,
    /**Skips the binarization. */
    BM_SKIP = 0
}
//# sourceMappingURL=enumdlrbinarizationmode.d.ts.map