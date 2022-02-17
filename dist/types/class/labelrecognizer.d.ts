/// <reference types="node" />
import DLRResult from "../interface/dlrresult";
import DLRRuntimeSettings from "../interface/dlrruntimesettings";
import { EnumDLRImagePixelFormat } from "../enum/enumdlrimagepixelformat";
import LabelRecognizerException from "../interface/labelrecognizerexception";
import DLRReferenceRegion from "../interface/dlrreferenceregion";
import ScanSettings from '../interface/scanSettings';
import PlayCallbackInfo from '../interface/playcallbackinfo';
import { CameraEnhancer } from 'dynamsoft-camera-enhancer';
/**
 * A class dedicated to image recognizing.
 * ```js
 * let recognizer = await Dynamsoft.DLR.LabelRecognizer.createInstance({runtimeSettings: 'image'});
 * let results = await recognizer.recognize(imageSource);
 * for(let result of results){
 *     for(let lineResult of result.lineResults){
 *         console.log(lineResult.text);
 *     }
 * }
 * ```
 * ```js
 * let scanner = await Dynamsoft.DLR.LabelRecognizer.createInstance({runtimeSettings: 'video'});
 * scanner.onFrameRead = results => console.log(results);
 * scanner.onUniqueRead = (txt, lineResult) => alert(txt);
 * scanner.startScanning(true);
 * ```
 */
export default class LabelRecognizer {
    private static _jsVersion;
    private static _jsEditVersion;
    protected static _version: string;
    /**
     * Get the current version.
     */
    static getVersion(): string;
    protected static _license: string;
    static get license(): string;
    static set license(keys: string);
    /**
     * Set the Dynamsoft Label Recognizer SDK license.
     * ```js
     * Dynamsoft.DLR.LabelRecognizer.license = "LICENSE";
     * ```
     * For convenience, you can set `license` in `script` tag instead.
     * ```html
     * <script src="https://cdn.jsdelivr.net/npm/dynamsoft-label-recognizer@2.2.1/dist/dlr.js" data-license="LICENSE"></script>
     * ```
     */
    static initLicense(keys: string): void;
    protected static _sessionPassword: string;
    /**
     * Specify a password to protect the `online key` from abuse.
     * ```js
     * Dynamsoft.DLR.LabelRecognizer.license = "123****-mytest";
     * Dynamsoft.DLR.LabelRecognizer.sessionPassword = "@#$%****";
     * ```
     * Since js in the browser is plaintext, it is not safe to set a password. It is recommended that you bind the `domain` as `Validation field` in the [handshake settings in dynamsoft website](https://www.dynamsoft.com/lts/index.html#/handshakeCodes) or your self-hosted license server.
     *
     * In nodejs, password is meaningful.
     * @see [[license]]
     */
    static set sessionPassword(value: string);
    static get sessionPassword(): string;
    /**
     * modify from https://gist.github.com/2107/5529665
     * @ignore
     */
    static browserInfo: any;
    /**
     * Detect environment and get a report.
     */
    static detectEnvironment(): Promise<any>;
    /** @ignore */
    static _workerName: string;
    protected static _engineResourcePath?: string;
    static get engineResourcePath(): string;
    /**
     * The SDK will try to automatically explore the engine location.
     * If the auto-explored engine location is not accurate, manually specify the engine location.
     * ```js
     * Dynamsoft.DLR.LabelRecognizer.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-label-recognizer@2.2.1/dist/";
     * await Dynamsoft.DLR.LabelRecognizer.loadWasm();
     * ```
    */
    static set engineResourcePath(value: string);
    /** @ignore */
    protected static _licenseServer?: string[];
    static get licenseServer(): string[] | string;
    /**
     * Specify the license server URL.
    */
    static set licenseServer(value: string[] | string);
    private static _deviceFriendlyName;
    /** @ignore */
    static get deviceFriendlyName(): string;
    /** @ignore */
    static set deviceFriendlyName(value: string);
    /** @ignore */
    static _isShowRelRecognizeTimeInResults: boolean;
    /** @ignore */
    _canvasMaxWH: number;
    /** @ignore */
    static _onLog: (message: any) => void;
    /** @ignore */
    static _bWasmDebug: boolean;
    /** @ignore */
    static _bNeverShowDialog: boolean;
    /** @ignore */
    static _dlrWorker: Worker;
    protected static _nextTaskID: number;
    protected static _taskCallbackMap: Map<number, (body: any) => void>;
    private static _loadWasmStatus;
    private static _loadWasmCallbackArr;
    /** @ignore */
    _instanceID: number;
    /** @ignore */
    private bSaveOriCanvas;
    /**
     * Whether to save the original image into canvas.
     * ```js
     * recognizer.ifSaveOriginalImageInACanvas = true;
     * let results = await recognizer.recognize(source);
     * document.body.append(recognizer.getOriginalImageInACanvas());
     * ```
     */
    get ifSaveOriginalImageInACanvas(): boolean;
    set ifSaveOriginalImageInACanvas(value: boolean);
    protected oriCanvas?: HTMLCanvasElement | OffscreenCanvas;
    /**
     * The original canvas.
     * ```js
     * recognizer.bSaveOriCanvas = true;
     * let results = await recognizer.recognize(source);
     * document.body.append(recognizer.oriCanvas);
     * ```
     */
    getOriginalImageInACanvas(): OffscreenCanvas | HTMLCanvasElement;
    /** @ignore */
    onResourcesLoadComplete: () => {};
    protected bufferShared: Uint8Array | Uint8ClampedArray;
    protected _region?: DLRReferenceRegion;
    protected set region(value: null | DLRReferenceRegion);
    protected get region(): null | DLRReferenceRegion;
    /** @ignore */
    _timeStartRecognize: any;
    /** @ignore */
    _timeEnterInnerDLR: any;
    protected recognizeRecords: any;
    protected drawRegionsultRecords: any;
    /**
     * @ignore A callback when wasm download success in browser environment.
     */
    static _onWasmDownloaded: () => void;
    /**
     * Determine if the decoding module has been loaded successfully.
     * @category Initialize and Destroy
     */
    static isWasmLoaded(): boolean;
    protected bDestroyed: boolean;
    /**
     * Indicates whether the instance has been destroyed.
     */
    isContextDestroyed(): boolean;
    /** @ignore */
    protected _setWarnnedEx: Set<string>;
    /** @ignore */
    protected static _lastErrorCode: number;
    /** @ignore */
    static get lastErrorCode(): number;
    /** @ignore */
    protected static _lastErrorString: string;
    /** @ignore */
    static get lastErrorString(): string;
    /** @ignore */
    protected _lastErrorCode: number;
    /** @ignore */
    get lastErrorCode(): number;
    /** @ignore */
    protected _lastErrorString: string;
    /** @ignore */
    get lastErrorString(): string;
    /** @ignore */
    _lastInnerDecodeDuration: number;
    private static _defaultUIElementURL;
    static get defaultUIElementURL(): string;
    /**
     * The url of the default scanner UI.
     * Can only be changed before `createInstance`.
     * ```js
     * Dynamsoft.DBR.BarcodeScanner.defaultUIElementURL = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.8.0/dist/dbr.ui.html";
     * let pScanner = null;
     * (async()=>{
     *     let scanner = await (pScanner = pScanner || Dynamsoft.DBR.BarcodeScanner.createInstance());
     *     await scanner.startScanning(true);
     * })();
     * ```
     */
    static set defaultUIElementURL(value: string);
    /**
     * A mode not use video, get a frame from OS camera instead.
     * ```js
     * let scanner = await Dynamsoft.DLR.LabelRecognizer.createInstance();
     * if(scanner.singleFrameMode){
     *     // the browser does not provide webrtc API, dlrjs automatically use singleFrameMode instead
     *     scanner.startScanning(true);
     * }
     * ```
     */
    get singleFrameMode(): boolean;
    /**
     * A mode not use video, get a frame from OS camera instead.
     * ```js
     * let scanner = await Dynamsoft.DLR.LabelRecognizer.createInstance();
     * scanner.singleFrameMode = true; // use singleFrameMode anyway
     * scanner.startScanning(true);
     * ```
     */
    set singleFrameMode(value: boolean);
    private _clickIptSingleFrameMode;
    /** @ignore */
    intervalTime: number;
    bOpenResultCheck: boolean;
    /** @ignore */
    private _intervalGetVideoFrame;
    private _loopReadVideoTimeoutId;
    /** @ignore */
    private array_getFrameTimeCost;
    /** @ignore */
    private array_decodeFrameTimeCost;
    private _assertOpen;
    private _bPauseScan;
    private _intervalDetectVideoPause;
    /** @ignore */
    _cvsDrawArea: HTMLCanvasElement;
    /** @ignore */
    _divScanArea: any;
    /** @ignore */
    _divScanLight: any;
    /** @ignore */
    _selCam: any;
    /** @ignore */
    _selRsl: any;
    /** @ignore */
    _selMinLtr: any;
    /** @ignore */
    _optGotMinLtr: any;
    /** @ignore */
    _btnClose: any;
    private _minLetter;
    private _updateMinLtrSel;
    /** @ignore */
    private _soundOnSuccessfullRead;
    /**
     * The sound to play when the scanner get successfull read.
     */
    get soundOnSuccessfullRead(): HTMLAudioElement;
    /**
     * The sound to play when the scanner get successfull read.
     * ```js
     * scanner.soundOnSuccessfullRead = new Audio("./pi.mp3");
     * ```
     */
    set soundOnSuccessfullRead(value: HTMLAudioElement);
    /**
     * Whether to play sound when the scanner reads a character line successfully.
     * Default value is `false`, which does not play sound.
     * Use `frame` or `true` to play a sound when any character line is found within a frame.
     * Use `unique` to play a sound only when any unique/unduplicated character line is found within a frame.
     * ```js
     * // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#chrome_enterprise_policies
     * startPlayButton.addEventListener('click', function() {
     *   scanner.bPlaySoundOnSuccessfulRead = false;
     *   scanner.bPlaySoundOnSuccessfulRead = true;
     *   scanner.bPlaySoundOnSuccessfulRead = "frame";
     *   scanner.bPlaySoundOnSuccessfulRead = "unique";
     * });
     * ```
     * refer: `favicon bug` https://bugs.chromium.org/p/chromium/issues/detail?id=1069731&q=favicon&can=2
     */
    bPlaySoundOnSuccessfulRead: (boolean | string);
    get whenToPlaySoundforSuccessfulRead(): string;
    /**
     * Whether to vibrate when the scanner reads a character line successfully.
     * Default value is `false`, which does not vibrate.
     * Use `frame` or `true` to play a sound when any character line is found within a frame.
     * Use `unique` to play a sound only when any unique/unduplicated character line is found within a frame.
     * ```js
     * // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#chrome_enterprise_policies
     * startPlayButton.addEventListener('click', function() {
     *   scanner.bVibrateOnSuccessfulRead = false;
     *   scanner.bVibrateOnSuccessfulRead = true;
     *   scanner.bVibrateOnSuccessfulRead = "frame";
     *   scanner.bVibrateOnSuccessfulRead = "unique";
     * });
     * ```
     * refer: `favicon bug` https://bugs.chromium.org/p/chromium/issues/detail?id=1069731&q=favicon&can=2
     */
    set whenToPlaySoundforSuccessfulRead(value: string);
    /**
     * Whether to vibrate when the scanner reads a barcode successfully.
     * Default value is `false`, which does not vibrate.
     * Use `frame` or `true` to vibrate when any barcode is found within a frame.
     * Use `unique` to vibrate only when any unique/unduplicated barcode is found within a frame.
     * ```js
     * // Can I use? https://caniuse.com/?search=vibrate
     * // A user gesture required. https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#chrome_enterprise_policies
     * startVibrateButton.addEventListener('click', function() {
     *   scanner.bVibrateOnSuccessfulRead = true;
     * });
     * ```
     * @ignore
     */
    bVibrateOnSuccessfulRead: (boolean | string);
    /**
     * Get or set how long (ms) the vibration lasts.
     * @see [[whenToVibrateforSuccessfulRead]]
     */
    vibrateDuration: number;
    get whenToVibrateforSuccessfulRead(): string;
    /**
     * Whether to vibrate when the scanner reads a barcode successfully.
     * Default value is `never`, which does not vibrate.
     * Use `frame` to vibrate when any barcode is found within a frame.
     * Use `unique` to vibrate only when any unique/unduplicated barcode is found within a frame.
     * ```js
     * // Can I use? https://caniuse.com/?search=vibrate
     * // A user gesture required. https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#chrome_enterprise_policies
     * startPlayButton.addEventListener('click', function() {
     *   scanner.whenToVibrateforSuccessfulRead = 'frame';
     * });
     * ```
     */
    set whenToVibrateforSuccessfulRead(value: string);
    /**
     * @category UI
     */
    regionMaskFillStyle: string;
    /**
     * @category UI
     */
    regionMaskStrokeStyle: string;
    /**
     * @category UI
     */
    regionMaskLineWidth: number;
    /**
     * @category UI
     */
    highlightFillStyle: string;
    /**
     * @category UI
     */
    highlightStrokeStyle: string;
    /**
     * @category UI
     */
    highlightLineWidth: number;
    protected beingLazyDrawRegionsults: boolean;
    private currentSettingsTemplate;
    private dce;
    get cameraEnhancer(): CameraEnhancer;
    set cameraEnhancer(value: CameraEnhancer);
    private adjustDCESettings;
    private static _loadWasmErr;
    /**
     * Manually load and compile the decoding module. Used for preloading to avoid taking too long for lazy loading.
     * @category Initialize and Destroy
     */
    static loadWasm(): Promise<void>;
    /**
     * @param type "warn" or "error"
     * @param content
     * @returns
     */
    protected static showDialog(type: string, content: string): Promise<void>;
    protected static createInstanceInWorker(): Promise<number>;
    /**
     * Create a `LabelRecognizer` object.
     * ```
     * let recognizer = await Dynamsoft.DLR.LabelRecognizer.createInstance();
     * ```
      * @category Initialize and Destroy
     */
    static createInstance(config?: any): Promise<LabelRecognizer>;
    /**
     * The main recognizing method can accept a variety of data types, including binary data, images, base64(with mime), urls, etc.
     * ```js
     * let results = await recognizer.recognize(blob);
     * for(let result of results){
     *     for(let lineResult of result.lineResults){
     *         console.log(lineResult.text);
     *     }
     * }
     * ```
     * @param source
     * @category Recognize
     */
    recognize(source: Blob | Buffer | ArrayBuffer | Uint8Array | Uint8ClampedArray | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | string, config?: any): Promise<DLRResult[]>;
    /**
     * The recognizing method can accept base64 with or without mime.
     * e.g. `data:image/jpg;base64,Xfjshekk....` or `Xfjshekk...`.
     * ```js
     * let results = await recognizer.recognizeBase64String(strBase64);
     * for(let result of results){
     *     for(let lineResult of result.lineResults){
     *         console.log(lineResult.text);
     *     }
     * }
     * ```
     * @param base64
     * @category Recognize
     */
    recognizeBase64String(base64: string, modelName?: string): Promise<DLRResult[]>;
    /**
     * The decoding method can accept url. The url source need to be in the same domain or allowed cors.
     * ```js
     * let results = await recognizer.recognizeUrl("./1.png");
     * for(let result of results){
     *     for(let lineResult of result.lineResults){
     *         console.log(lineResult.text);
     *     }
     * }
     * ```
     * @param url
     * @category Recognize
     */
    recognizeUrl(url: string, modelName?: string): Promise<DLRResult[]>;
    /**
     * Recognize from the memory buffer containing image pixels in defined format.
     * @ignore
     */
    _recognizeBuffer_Uint8Array(buffer: Uint8Array | Uint8ClampedArray, width: number, height: number, stride: number, format: EnumDLRImagePixelFormat, config?: any): Promise<any>;
    /**
     *
     * @param buffer
     * @param width
     * @param height
     * @param stride
     * @param format
     * @param config
     * @ignore
     */
    _recognizeBuffer_Blob(buffer: Blob, width: number, height: number, stride: number, format: EnumDLRImagePixelFormat, config?: any): Promise<any>;
    /**
     * Recognize from raw buffer.
     * @param buffer
     * @param width
     * @param height
     * @param stride
     * @param format
     * @param config
     * @category Recognize
     */
    recognizeBuffer(buffer: Uint8Array | Uint8ClampedArray | ArrayBuffer | Blob | Buffer, width: number, height: number, stride: number, format: EnumDLRImagePixelFormat, config?: any): Promise<any>;
    /** @ignore */
    _recognizeFileInMemory_Uint8Array(bytes: Uint8Array, config?: any): Promise<any>;
    /**
     * Gets current settings and save it into a struct.
     * ```js
     * let settings = await recognizer.getRuntimeSettings();
     * settings.referenceRegion.location.points = [{x: 0,y: 40},{x: 100,y: 40},{x: 100,y: 60},{x: 0,y: 60}];
     * await recognizer.updateRuntimeSettings(settings);
     * ```
     * @see [updateRuntimeSettings]()
     * @category Runtime Settings
     */
    getRuntimeSettings(): Promise<DLRRuntimeSettings>;
    private static isRegionNormalPreset;
    /**
     * Update runtime settings with a given struct, or a string of
     * `numberLetter`, `number`, `letter`, `numberUppercase`, `cppdefault`,
     * `video-numberLetter`, `video-number`, `video-letter`, `video-numberUppercase`, `video-cppdefault`,
     * to use preset settings for LabelRecognizer.
     * The default settings for LabelRecognizer is `cppdefault`.
     * ```js
     * let settings = await recognizer.getRuntimeSettings();
     * settings.referenceRegion.location.points = [{x: 0,y: 40},{x: 100,y: 40},{x: 100,y: 60},{x: 0,y: 60}];
     * await recognizer.updateRuntimeSettings(settings);
     * ```
     * ```js
     * await scanner.updateRuntimeSettings('video');
     * ```
     * @category Runtime Settings
     * @ignore
     */
    updateRuntimeSettings(settings: DLRRuntimeSettings | string): Promise<void>;
    /**
     * Resets all parameters to default values.
     * ```js
     * await recognizer.resetRuntimeSettings();
     * ```
     * @category Runtime Settings
     */
    resetRuntimeSettings(): Promise<void>;
    /**
     * Update runtime settings with a given json, or a string of
     * `numberLetter`, `number`, `letter`, `numberUppercase`, `cppdefault`, `VIN`, `VIN_NA`, `passportMRZ`, `visaMRZ_A`
     * `video-numberLetter`, `video-number`, `video-letter`, `video-numberUppercase`, `video-cppdefault`, `video-VIN`, `video-VIN_NA`, `video-passportMRZ`, `video-visaMRZ_A`
     * to use preset settings for LabelRecognizer.
     * The default settings for LabelRecognizer is `cppdefault`.
     * ```js
     * let settings = JSON.parse(await recognizer.outputRuntimeSettingsToString());
     * let region = settings.ReferenceRegionArray[0].Localization;
     * region.FirstPoint = [0,40];
     * region.SecondPoint = [100,40];
     * region.ThirdPoint = [100,60];
     * region.FourthPoint = [0,60];
     * await recognizer.updateRuntimeSettingsFromString(JSON.stringify(settings));
     * ```
     * ```js
     * await scanner.updateRuntimeSettingsFromString('video');
     * ```
     * @category Runtime Settings
     */
    updateRuntimeSettingsFromString(settings: any): Promise<void>;
    /**
     * Gets current settings and save it into a json.
     * ```js
     * let settings = await recognizer.getRuntimeSettings();
     * settings.referenceRegion.location.points = [{x: 0,y: 40},{x: 100,y: 40},{x: 100,y: 60},{x: 0,y: 60}];
     * await recognizer.updateRuntimeSettings(settings);
     * ```
     * @see [updateRuntimeSettingsFromString]()
     * @category Runtime Settings
     */
    outputRuntimeSettingsToString(): Promise<string>;
    /**
     * @category Runtime Settings
     */
    updateReferenceRegionFromBarcodeResults(dbrTextResults: any): Promise<void>;
    /**
     * Initialize runtime settings with the settings in given JSON string.
     * ```js
     * await recognizer.appendCaffeModelBuffer("Number","@engineResourcePath");
     * ```
     * @ignore
     * @category Runtime Settings
     */
    static appendCaffeModelBuffer(name: string, folderUrl: string): Promise<void>;
    /**
     * Resets all parameters to default values.
     * ```js
     * await recognizer.appendCaffeModelBuffer("Number","@engineResourcePath");
     * await recognizer.eraseCaffeModelByName("Number");
     * ```
     * @ignore
     * @category Runtime Settings
     */
    static eraseCaffeModelByName(name: string): Promise<void>;
    /**
     * Resets all parameters to default values.
     * ```js
     * await recognizer.appendCaffeModelBuffer("Number","@engineResourcePath");
     * await recognizer.eraseAllCaffeModels();
     * ```
     * @ignore
     * @category Runtime Settings
     */
    static eraseAllCaffeModels(): Promise<void>;
    private _recognize_Blob;
    /**
     *
     * @param arrayBuffer
     * @param config
     * @ignore
     */
    private _recognize_ArrayBuffer;
    /**
     *
     * @param uint8Array
     * @param config
     * @ignore
     */
    private _recognize_Uint8Array;
    /**
     *
     * @param image
     * @param config
     * @ignore
     */
    private _recognize_Image;
    private _recognize_Canvas;
    /**
     * recognize video is not multi call safe in an instance, we reuse many thing for speed, so make sure wait util one finish then call next
     * @param video
     * @param config
     * @ignore
     */
    _recognize_Video(video: HTMLVideoElement, config?: any): Promise<DLRResult[]>;
    private _recognize_Base64;
    private _recognize_Url;
    private _recognize_FilePath;
    /** @ignore */
    static LabelRecognizerException(ag0: any, ag1: any): LabelRecognizerException;
    protected _handleRetJsonString(objRet: any): any;
    /**
     * Sets the optional argument for a specified mode in Modes parameters.
     * ```js
     * await recognizer.setModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1");
     * ```
     * @param modeName
     * @param index
     * @param argumentName
     * @param argumentValue
     * @category Runtime Settings
     */
    setModeArgument(modeName: string, index: number, argumentName: string, argumentValue: string): Promise<void>;
    /**
     * Gets the optional argument for a specified mode in Modes parameters.
     * ```js
     * let argumentValue = await recognizer.getModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy");
     * ```
     * @param modeName
     * @param index
     * @param argumentName
     * @category Runtime Settings
     */
    getModeArgument(modeName: string, index: number, argumentName: string): Promise<string>;
    /**
     * const dce = await Dynamsoft.DCE.createInstance();
     * scanner.cameraEnhancer = dce;
     * scanner.cameraEnhancer.open(true);
     * console.log(await scanner.recognizeCurrentFrame());
     */
    recognizeCurrentFrame(): Promise<DLRResult[]>;
    private clearMapDecodeRecord;
    /** @ignore */
    _onCameraSelChange: () => void;
    /** @ignore */
    _onResolutionSelChange: () => void;
    /** @ignore */
    _onMinLetterSelChange: (ev: Event) => Promise<void>;
    /** @ignore */
    _onCloseBtnClick: () => void;
    /** @ignore */
    _bindUI(): void;
    /** @ignore */
    _unbindUI(): void;
    /**
     * The event that is triggered once a single frame has been scanned.
     * The results object contains all the results that the recognizer was able to recognize.
     * ```js
     * scanner.onFrameRead = results => {
     * for(let result of results){
     *     for(let lineResult of result.lineResults){
     *         console.log(lineResult.text);
     *     }
     * }
     * };
     * ```
     */
    onFrameRead?: (results: DLRResult[]) => void;
    /**
     * This event is triggered when a not duplicated new character line is found.
     * txt holds the text result. result contains the actual line result, including the text result.
     * Old character line will remember for duplicateForgetTime.
     * ```js
     * scanner.onUniqueRead = (txt, result) => {
     *     alert(txt);
     *     console.log(result);
     * };
     * ```
     */
    onUniqueRead?: (txt: string, result: DLRResult[]) => void;
    /**
     * Get current scan settings of the LabelRecognizer object and saves it into a struct.
     * ```js
     * let scanSettings = await scanner.getScanSettings();
     * scanSettings.intervalTime = 50;
     * scanSettings.duplicateForgetTime = 1000;
     * await scanner.updateScanSettings(scanSettings);
     * ```
     */
    getScanSettings(): Promise<ScanSettings>;
    /**
     * Update ScanSettings by specify parameter values.
     * ```js
     * let scanSettings = await scanner.getScanSettings();
     * scanSettings.intervalTime = 50;
     * scanSettings.duplicateForgetTime = 1000;
     * await scanner.updateScanSettings(scanSettings);
     * ```
     * @param settings
     */
    updateScanSettings(settings: ScanSettings): Promise<void>;
    /** @ignore */
    _show(): void;
    /**
     * Stop the video, and release the camera.
     * @category Play and Pause
     */
    private stop;
    /** @ignore */
    _cloneDecodeResults(results: any): any;
    /** @ignore */
    private _loopReadVideo;
    /**
     * start dce fetching frame loop, and get frame from frame queue
     * @ignore
     */
    private _getVideoFrame;
    /**
     * check if the vin code is valid
     * @ignore
     */
    private _checkValidVIN;
    /**
     * check if the second row of passport mrz code is valid.
     * check digit only exits in second row in passport mrz.
     * @ignore
     */
    private _checkValidMRP;
    /**
     * check if the second row of visa mrz-a code is valid.
     * check digit only exits in second row in visa mrz.
     * @ignore
     */
    private _checkValidMRV_A;
    /**
     * check if the second row of visa mrz-b code is valid.
     * check digit only exits in second row in visa mrz.
     * @ignore
     */
    private _checkValidMRV_B;
    /** @ignore */
    _drawRegionsults(results?: DLRResult[]): void;
    /** @ignore */
    _clearRegionsults(): void;
    protected _tempSolutionStatus: string;
    /**
     * Bind UI, open the camera, start recognizing.
     * ```js
     * await scanner.startScanning(); // Don not modify DOM. Usually used in framework like React, Vue, Angular.
     * ```
     * Bind UI, open the camera, start recognizing, and remove the UIElement `display` style if the original style is `display:none;`.
     * ```js
     * await scanner.startScanning(true); // Modify Dom and show UI. Useful when you don't use framework.
     * ```
     * @category Open and Close
     */
    startScanning(bShowUI?: boolean): Promise<PlayCallbackInfo>;
    /**
     * Stop decoding, release camera, unbind UI.
     * @category Open and Close
     */
    stopScanning(bHideUI?: boolean): void;
    /**
     * Pause the recognizing process.
     * @category Pause and Resume
     */
    pauseScanning(): void;
    /**
     * Resume the recognizing process.
     * @category Pause and Resume
     */
    resumeScanning(): void;
    /**
     * Destructor the `LabelRecognizer` object.
     * @category Initialize and Destroy
     * @ignore
     */
    destroyContext(): Promise<void>;
}
//# sourceMappingURL=labelrecognizer.d.ts.map