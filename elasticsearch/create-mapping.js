var elasticsearch = require('elasticsearch');
// var Promise = require('bluebird');

// var log = console.log.bind(console);

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.indices.create({
  index: 'test',
  body: {
    // settings: {
    //   index: {
    //     number_of_shards: 3,
    //     number_of_replicas: 2
    //   }
    // },
    "settings": {
      "analysis": {
        "analyzer": {
          "tiny_prd": {
            "tokenizer": "prd_edge_ngram",
            "filter": [
              "standard",
              "lowercase",
              "prd_stop_words"

            ]
          }
        },
        "tokenizer": {
          "prd_edge_ngram": {
            "type": "edge_ngram",
            "min_gram": 2,
            "max_gram": 10,
            "token_chars": [
              "letter",
              "digit",
              "punctuation"
            ]
          }
        },
        "filter": {
          "prd_stop_words": {
            "type": "stop",
            "stopwords": "_english_"
          }
        }
      }
    },
    "mappings": {
      "_doc": {

        "properties": {
          "category": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword",
                "ignore_above": 256
              }
            }
          },
          "created_at": {
            "type": "long"
          },
          "description": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword",
                "ignore_above": 256
              }
            }
          },
          "images": {
            "properties": {
              "id": {
                "type": "long"
              },
              "url": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              }
            }
          },
          "item_info": {
            "properties": {
              "tags": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "thumbnail": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              }
            }
          },
          "options": {
            "properties": {
              "Color": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "Storage": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              }
            }
          },
          "product_id": {
            "type": "long"
          },
          "rating_average": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword",
                "ignore_above": 256
              }
            }
          },
          "store_id": {
            "type": "long"
          },
          "thumbnail": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword",
                "ignore_above": 256
              }
            }
          },
          "title": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword",
                "ignore_above": 256
              }
            }
          },
          "total_rating": {
            "type": "long"
          },
          "total_review": {
            "type": "long"
          },
          "updated_at": {
            "type": "long"
          },
          "variants": {
            "properties": {
              "compared_price": {
                "type": "float"
              },
              "created_at": {
                "type": "long"
              },
              "id": {
                "type": "long"
              },
              "image_url": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "inventory": {
                "type": "long"
              },
              "price": {
                "type": "float"
              },
              "properties": {
                "properties": {
                  "Color": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "Storage": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  }
                }
              },
              "sku": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "updated_at": {
                "type": "long"
              }
            }
          }
        }
      }
    }
  }
});


