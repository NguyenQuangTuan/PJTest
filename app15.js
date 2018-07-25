arr = [
  {
    name: 'tuan'
  },
  {
    name: 'loan'
  },
  {
    name: 'tuan'
  }
]

new_arr = [...new Set(arr.map(ck => JSON.stringify(ck)))].map(element => JSON.parse(element))


console.log(new_arr)


x = {
  "query": {
    "bool": {
      "should": [{
        "match": {
          "searchTerm": {
            "query": "style",
            "type": "boolean"
          }
        }
      },
      {
        "flt_field": {
          "searchTerm": {
            "like_text": "style"
          }
        }
      }]
    }
  },
  "aggs": {
    "group_by_target_url": {
      "terms": {
        "field": "targetUrl",
        "order": {
          "max_score": "desc"
        }
      },
      "aggs": {
        "max_score": {
          "max": {
            "script": "doc.score"
          }
        }
      }
    }
  }
}