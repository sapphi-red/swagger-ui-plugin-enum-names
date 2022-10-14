import { WrapPrimitiveModel } from './PrimitiveModelWrapper'
import { WrapEnumModel } from './EnumModelWrapper'
import { WrapJsonSchema_string } from './JsonSchema/JsonSchema_stringWrapper'
import './index.css'

export function EnumNamesPlugin(_system) {
  return {
    wrapComponents: {
      PrimitiveModel: WrapPrimitiveModel,
      EnumModel: WrapEnumModel,
      JsonSchema_string: WrapJsonSchema_string
    }
  }
}
