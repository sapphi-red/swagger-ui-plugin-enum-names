export const WrapJsonSchema_string = (_customData) => (Original, system) => {
  class EnumInfo extends system.React.Component {
    render() {
      let { getComponent, val, name, desc } = this.props
      const Markdown = getComponent("Markdown", true)

      return (
        <li className="enum-info">
          <p className="value">{val}</p>
          <p className="name">name: {name}</p>
          {desc ? <Markdown source={desc} /> : null}
        </li>
      )
    }
  }

  return class JsonSchema_string extends system.React.Component {
    render() {
      let { getComponent, schema } = this.props

      if (schema) {
        const ModelCollapse = getComponent('ModelCollapse')

        const enumArray = schema.get("enum")
        const names = schema.get("x-enum-varnames") || schema.get("x-enumNames")
        const descs = schema.get("x-enum-descriptions")

        if (enumArray && (names || descs)) {
          return (
            <>
              <ModelCollapse collapsedContent={<span>Enum Info</span>}>
                <ul className="enum-info-list">
                  {
                    enumArray
                      .zip(...[names, descs].filter(a => a != null))
                      .map(([val, name, desc]) => <EnumInfo key={val} getComponent={getComponent} val={val} name={name} desc={desc} />)
                  }
                </ul>
              </ModelCollapse><br />
              <Original {...this.props} />
            </>
          )
        }
      }

      return <Original {...this.props} />
    }
  }
}
