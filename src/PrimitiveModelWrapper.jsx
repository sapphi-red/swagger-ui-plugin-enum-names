import React from 'react'

export const EnumContext = React.createContext()

export const WrapPrimitiveModel = (Original, _system) => class PrimitiveModelWrapped extends React.Component {
  render() {
    const enumContextValue = this.getEnumContextValue()
    return (
      <EnumContext.Provider value={enumContextValue}>
        <Original {...this.props} />
      </EnumContext.Provider>
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
