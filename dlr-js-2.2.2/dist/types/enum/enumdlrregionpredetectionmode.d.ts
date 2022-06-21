/**
* @enum DLRRegionPredetectionMode
*
* Describes the region predetection mode.
*
*/
export declare enum EnumDLRRegionPredetectionMode {
    /**Auto*/
    RPM_AUTO = 1,
    /**Takes the whole image as a region*/
    RPM_GENERAL = 2,
    /**Detects region using the general algorithm based on RGB colour contrast*/
    RPM_GENERAL_RGB_CONTRAST = 4,
    /**Detects region using the general algorithm based on gray contrast*/
    RPM_GENERAL_GRAY_CONTRAST = 8,
    /**Detects region using the general algorithm based on HSV colour contrast*/
    RPM_GENERAL_HSV_CONTRAST = 16,
    /**Reserved setting for region predection mode.*/
    RPM_REV = 2147483648,
    /**Skip*/
    RPM_SKIP = 0
}
//# sourceMappingURL=enumdlrregionpredetectionmode.d.ts.map