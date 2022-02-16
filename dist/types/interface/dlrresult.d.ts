import DLRQuadrilateral from './dlrquadrilateral';
import DLRLineResult from './dlrlineresult';
export default interface DLRResult {
    location: DLRQuadrilateral;
    confidence: number;
    lineResults: DLRLineResult[];
}
//# sourceMappingURL=dlrresult.d.ts.map