https://data.bayerncloud.digital/api/v4/endpoints/widget-alles

{
	"page": {
    "size": 25,
    "number": 1
  },
	"filter": {
		"attribute": {
			"internalContentScore": {
				"in": {
					"max": 100,
					"min": 70
				}
			}
		},
		"geo": {
			"in": {
				"perimeter": [
					13.428792940573286,
					48.566029217335014,
					5000
				]
			}
		}
	},
	"fields": "@id, name",
	"include": "dc:contentScore",
	"sort": "-advanced_attribute_internal_content_score"
}