import SwaggerUI from 'swagger-ui'
import SwaggerUIStandalonePreset from 'swagger-ui/dist/swagger-ui-standalone-preset'
import { EnumNamesPlugin } from 'swagger-ui-plugin-enum-names'

import 'swagger-ui/dist/swagger-ui.css'
import 'swagger-ui-plugin-enum-names/dist/index.min.css'

const spec = {
  openapi: '3.0.0',
  paths: {
    '/items': {
      get: {
        responses: {
          200: {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Items'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32'
          },
          type: {
            $ref: '#/components/schemas/ItemType'
          }
        }
      },
      ItemType: {
        type: 'string',
        enum: ['General', 'Special'],
        'x-enum-varnames': ['general', 'special'],
        'x-enum-descriptions': ['general-itemtype', 'special-itemtype']
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  SwaggerUI({
    spec,
    dom_id: '#app',
    deepLinking: true,
    presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUI.plugins.DownloadUrl, EnumNamesPlugin],
    layout: 'StandaloneLayout'
  })
})
