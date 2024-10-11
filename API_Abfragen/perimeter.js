https://data.bayerncloud.digital/api/v4/endpoints/list_attractions

{
	"filter": {
		"geo": {
			"in": {
				"perimeter": [
					13.15,
					49.09,
					10000
				]
			}
		}
	},
	"fields": "@id, name",
	"include": "image, image.dc:classification"
}