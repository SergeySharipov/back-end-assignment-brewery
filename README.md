## back-end-assignment-brewery

# Documentation

## Run
Install dependences: npm install
<br/>
<br/>
Production: npm start
<br/>
Development: npm run dev
<br/>
Test: npm run test
<br/>
## Request
Route: /breweries
<br/>
Method: GET
<br/>
Query Parameters:
<br/>
![Query Parameters](https://github.com/SergeySharipov/back-end-assignment-brewery/blob/main/readme.images/breweries_query_parameters.JPG)
<br/>
### Successful Response:
Response body (JSON):
```json
{
  "data": [
    {
      "id": "10-56-brewing-company-knox",
      "name": "10-56 Brewing Company",
      "brewery_type": "micro",
      "street": "400 Brown Cir",
      "address_2": null,
      "address_3": null,
      "city": "Knox",
      "state": "Indiana",
      "county_province": null,
      "postal_code": "46534",
      "country": "United States",
      "longitude": "-86.627954",
      "latitude": "41.289715",
      "phone": "6308165790",
      "website_url": null,
      "updated_at": "2021-10-23T02:24:55.243Z",
      "created_at": "2021-10-23T02:24:55.243Z"
    },
…
]
}

```
Response status code: 200
<br/>
<br/>
### Error Responses:
If type_of parameter is invalid:
<br/>
Response body (JSON):
```json
{
"error": "type_of parameter is invalid"
}
```
Response status code: 400.
<br/>
<br/>
If nothing is found:
<br/>
Response body (JSON):
```json
{
"error": "Not Found"
}
```
Response status code: 404.
<br/>
<br/>
If route is invalid:
<br/>
Response body (JSON):
```json
{
"error": "Unknown Route"
}
```
Response status code: 404.
