import { CreateEnumContext, WrapPrimitiveModel } from './PrimitiveModelWrapper'
import { WrapEnumModel } from './EnumModelWrapper'
import { WrapJsonSchema_string } from './JsonSchema/JsonSchema_stringWrapper'
import './index.css'

export function EnumNamesPlugin(system) {
  const EnumContext = CreateEnumContext(system)
  const customData = {
    EnumContext
  }

  return {
    wrapComponents: {
      PrimitiveModel: WrapPrimitiveModel(customData),
      EnumModel: WrapEnumModel(customData),
      JsonSchema_string: WrapJsonSchema_string(customData)
    }
  }
}
