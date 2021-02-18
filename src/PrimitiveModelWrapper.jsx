import React from 'react'
import PropTypes from 'prop-types'

class EnumContextProvider extends React.Component {
  static childContextTypes = {
    enumData: PropTypes.object
  }

  getChildContext() {
    const { schema } = this.props
    if (!schema || !schema.get) {
      return { enumData: undefined }
    }

    const enumArray = schema.get("enum")
    const names = schema.get("x-enum-varnames") || schema.get("x-enumNames")
    const descs = schema.get("x-enum-descriptions")
    return {
      enumData: {
        enumArray,
        names,
        descs
      }
    }
  }

  render() {
    return <div style={{display: 'contents'}}>{ this.props.children }</div>
  }
}

export const WrapPrimitiveModel = (Original, _system) => class PrimitiveModelWrapped extends React.Component {
  render() {
    return (
      <EnumContextProvider {...this.props}>
        <Original {...this.props} />
      </EnumContextProvider>
    )
  }
}
