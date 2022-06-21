/**
* @enum DLRImagePreprocessingMode
*
* Describes the image preprocessing mode.
*
*/
export declare enum EnumDLRImagePreprocessingMode {
    /**Not supported yet. */
    IPM_AUTO = 1,
    /**Takes the unpreprocessed image for following operations. */
    IPM_GENERAL = 2,
    /**Preprocesses the image using the gray equalization algorithm. Check @ref IPM for available argument settings.*/
    IPM_GRAY_EQUALIZE = 4,
    /**Preprocesses the image using the gray smoothing algorithm. Check @ref IPM for available argument settings.*/
    IPM_GRAY_SMOOTH = 8,
    /**Preprocesses the image using the sharpening and smoothing algorithm. Check @ref IPM for available argument settings.*/
    IPM_SHARPEN_SMOOTH = 16,
    /**Preprocesses the image using the morphology algorithm. Check @ref IPM for available argument settings.*/
    IPM_MORPHOLOGY = 32,
    /**Reserved setting for image preprocessing mode.*/
    IPM_REV = 2147483648,
    /**Skips image preprocessing. */
    IPM_SKIP = 0
}
//# sourceMappingURL=enumdlrimagepreprocessingmode.d.ts.map