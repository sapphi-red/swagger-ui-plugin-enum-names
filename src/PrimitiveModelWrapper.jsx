export const CreateEnumContext = (system) => system.React.createContext()

export const WrapPrimitiveModel = (customData) => (Original, system) =>
  class PrimitiveModelWrapped extends system.React.Component {
    render() {
      const enumContextValue = this.getEnumContextValue()
      return (
        <customData.EnumContext.Provider value={enumContextValue}>
          <Original {...this.props} />
        </customData.EnumContext.Provider>
      )
    }

    getEnumContextValue() {
      const { schema } = this.props
      if (!schema || !schema.get) {
        return undefined
      }

      const enumArray = schema.get("enum")
      const names = schema.get("x-enum-varnames") || schema.get("x-enumNames")
      const descs = schema.get("x-enum-descriptions")
      return {
        enumArray,
        names,
        descs
      }
    }
  }
