import {
  AnyFunction,
  TArea,
  TPiece,
} from '../../types';

export interface IHighlights {
  addModule: AnyFunction
  getModules: AnyFunction
  removeModule: AnyFunction
}

export interface IClocksItem {
  emit: AnyFunction
  off: AnyFunction
  offAll: AnyFunction
  offMany: AnyFunction
  on: AnyFunction
  onAll: AnyFunction
  onMany: AnyFunction
  subscriptions: {
    all: any[]
    End: any[]
  }
  add: AnyFunction
  destroy: AnyFunction
  get: AnyFunction
  reset: AnyFunction
  start: AnyFunction
  stop: AnyFunction
}

export interface IClocks {
  1: IClocksItem
  2: IClocksItem
  activate: AnyFunction
  deactivate: AnyFunction
  getTimeControl: AnyFunction
  getTimeControlType: AnyFunction
  isActive: AnyFunction
  setTimeControl: AnyFunction
}

export interface IPlugins {
  add: AnyFunction
  get: AnyFunction
  remove: AnyFunction
  setCreatePluginContext: AnyFunction
}

export type TAreaFromTo = string;

export type TMarkingArea = TArea | TAreaFromTo;

export type TMarkingType = 'arrow' | 'effect' | 'square';

export interface IMarking {
  key: TMarkingArea
  type: TMarkingType
  color?: string
  data?: any[]
}

export interface IMove {
  from: TArea
  to: TArea
  color?: number
  flags?: number
  piece?: TPiece
  san?: string
  lines?: any
  animate?: boolean
  userGenerated?: boolean
  userGeneratedDrop?: boolean
  promotion?: string
}

export type TEventType =
  'Create' |
  'DeletePosition' |
  'LineUpdated' |
  'Load' |
  'ModeChanged' |
  'Move' |
  'MoveBackward' |
  'MoveForward' |
  'SelectLineEnd' |
  'SelectLineStart' |
  'SelectNode' |
  'TimeControlUpdated' |
  'Undo' |
  'UpdateOptions';

export interface IMarkingsData {
  arrow: Record<TAreaFromTo, {
    type: "arrow"
    key: TAreaFromTo
    color: 'default' | string
    data: any
  }>
  customItem: any
  effect: any
  square: Record<TArea, {
    type: "square"
    key: TArea
    color: 'default' | string
    data: any
  }>
}

export interface IPiece {
  type: string
  color: number
  promoted: boolean
  square: TArea
}

export interface IPiecesManager {
  deleteItem: AnyFunction
  get: AnyFunction
  getCollection: () => Record<TArea, IPiece>
  isDefined: AnyFunction
  keys: AnyFunction
  set: AnyFunction
}

export interface IGame {
  agreeDraw: AnyFunction
  before: AnyFunction
  blinkSquare: AnyFunction
  cancelPremoves: AnyFunction
  claimDraw: AnyFunction
  clearMarkings: (types: TMarkingType[], someBoolean?: boolean) => any
  clocks: IClocks
  consumeNextPremove: AnyFunction
  createContinuation: AnyFunction
  deletePosition: AnyFunction
  destroy: AnyFunction
  emit: (event: TEventType, data: any) => void
  extendAPI: AnyFunction
  getCheatDetection: AnyFunction
  getContext: AnyFunction
  getFEN: AnyFunction
  getHeaders: AnyFunction
  getHistoryFENs: AnyFunction
  getHistorySANs: AnyFunction
  getLastMove: AnyFunction
  getLegalMoves: () => IMove[]
  getLegalMovesForSquare: (square: TArea) => IMove[]
  getLegalPremovesForSquare: AnyFunction
  getLine: AnyFunction
  getMarkings: () => IMarkingsData
  getMaterial: AnyFunction
  getMode: AnyFunction
  getMove: (move: Partial<IMove>) => IMove
  getNodeByIds: AnyFunction
  getNodeDiffData: AnyFunction
  getNodeIds: AnyFunction
  getOptions: AnyFunction
  getPGN: AnyFunction
  getPiece: (square: TArea) => IPiece
  getPieces: () => IPiecesManager
  getPlayingAs: () => number
  getPointerPosition: AnyFunction
  getPosition: AnyFunction
  getPositionDetails: AnyFunction
  getPremove: AnyFunction
  getPremovePieces: AnyFunction
  getPremoves: AnyFunction
  getRawLines: AnyFunction
  getRelativeNode: AnyFunction
  getResult: AnyFunction
  getSelectedNode: AnyFunction
  getStartingMoveNumber: AnyFunction
  getTCN: AnyFunction
  getTurn: () => number
  getVariant: AnyFunction
  highlights: IHighlights
  isAnimating: AnyFunction
  isAtEndOfLine: AnyFunction
  isCheck: AnyFunction
  isGameOver: AnyFunction
  isLegalMove: AnyFunction
  isLegalPremove: AnyFunction
  load: AnyFunction
  mark: AnyFunction
  move: (move: IMove) => void
  moveBackward: AnyFunction
  moveForward: AnyFunction
  moveVariation: AnyFunction
  off: AnyFunction
  offAll: AnyFunction
  on: (event: TEventType, fn: AnyFunction) => void
  onAll: AnyFunction
  outOfTime: AnyFunction
  playSound: AnyFunction
  plugins: IPlugins
  premove: AnyFunction
  promoteVariation: AnyFunction
  resetGame: AnyFunction
  resetToMainLine: AnyFunction
  resign: AnyFunction
  resize: AnyFunction
  run: AnyFunction
  selectLineEnd: AnyFunction
  selectLineStart: AnyFunction
  selectNode: AnyFunction
  setGameDetails: AnyFunction
  setMode: AnyFunction
  setOptions: AnyFunction
  setPlayingAs: (player: number) => number
  setTimestamps: AnyFunction
  setTurn: AnyFunction
  toggleMarking: (marking: IMarking, someBoolean?: boolean) => any
  undo: AnyFunction
  unmark: AnyFunction
  updateLineComment: AnyFunction
  updateNode: AnyFunction
  updateResultHeader: AnyFunction
}

export interface TElementWithGame extends Element {
  game: IGame
}