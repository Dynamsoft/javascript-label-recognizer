import DLRReferenceRegion from "./dlrreferenceregion";
import DLRQuadrilateral from './dlrquadrilateral';
import { EnumDLRBinarizationMode } from "../enum/enumdlrbinarizationmode";
/**
 * @see [RuntimeSettings]()//todo
 */
export default interface DLRRuntimeSettings {
    /**
     *
     */
    /**
     *
     */
    characterModelName: string;
    /**
     *
     */
    referenceRegion: DLRReferenceRegion;
    /**
     *
     */
    textArea: DLRQuadrilateral;
    /**
     *
     */
    binarizationModes: EnumDLRBinarizationMode[];
}
//# sourceMappingURL=dlrruntimesettings.d.ts.map