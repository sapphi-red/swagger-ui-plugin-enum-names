import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

class ExtendedEnumModel extends React.Component {
  static contextTypes = {
    enumData: PropTypes.object
  }

  render() {
    const { value, getComponent } = this.props

    const ModelCollapse = getComponent('ModelCollapse')
    const Markdown = getComponent("Markdown", true)

    const enumData = this.context?.enumData
    const isValidData = enumData && enumData.enumArray && Immutable.is(enumData.enumArray, value)
    const namesArray = isValidData && enumData.names ? enumData.names.toArray() : []
    const descsArray = isValidData && enumData.descs ? enumData.descs.toArray() : []

    const collapsedContent = <span>Array [ { value.count() } ]</span>
    return (
      <span className="prop-enum">
        Enum:<br />
        <ModelCollapse collapsedContent={ collapsedContent }>
          [
            <table className="model"><tbody>
              {
                value.map((val, i) => {
                  const name = namesArray[i]
                  const desc = descsArray[i]
                  return (
                    <tr key={val}>
                      <td className="value">{val}</td>
                      <td>
                        {name !== undefined ? <span className="name">name: {name}</span> : null}
                        {desc !== undefined ? <Markdown source={ desc } /> : null}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody></table>
          ]
        </ModelCollapse>
      </span>
    )
  }
}

export const WrapEnumModel = (_Original, _system) => ExtendedEnumModel
