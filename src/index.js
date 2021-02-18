import { WrapPrimitiveModel } from './PrimitiveModelWrapper'
import { WrapEnumModel } from './EnumModelWrapper'
import './index.css'

export function EnumNamesPlugin(_system) {
  return {
    wrapComponents: {
      PrimitiveModel: WrapPrimitiveModel,
      EnumModel: WrapEnumModel
    }
  }
}
