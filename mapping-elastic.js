// x= {
//     "settings": {
//       "analysis": {
//         "analyzer": {
//           "my_analyzer": {
//               "type": "custom",
//               "filter": ["trim","myCustomFilter1", "myCustomFilter2", "my_stop"],
//               "tokenizer": "tinyProduts"
//           }
//         },
//         "filter": {
//              "myCustomFilter1": {
//              "type": "lowercase"
//              },
//              "myCustomFilter2": {
//               "type": "standard"
//              },
//              "my_stop": {
//                   "type":		"stop",
//                   "stopwords":	"_english_"
//               },
//               "trim": {
//                   "type": "trim"
//               }
//            },
//         "tokenizer": {
//           "tinyProduts": {
//             "type": "edge_ngram",
//             "min_gram": 2,
//             "max_gram": 10,
//             "token_chars": [
//               "whitespace",
//               "punctuation",
//               "symbol"
//             ]
//           }
//         }
//       }
//     },
//     "mappings": {
//             "_doc" : {
//               "properties" : {
//                   "title" : {
//                       "type" : "text",
//                       "analyzer" : "my_analyzer"
//                   }
//               }
//           }
//       }
//   }

  y = {
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
            "type":		"stop",
               "stopwords":	"_english_"
          }
        }
      }
    },
    "mappings": {
      "_doc": {
        "properties": {
          "category": {
            "type": "text",
            "analyzer": "tiny_prd"
          },
          "created_at": {
            "type": "long"
          },
          "description": {
            "type": "text"
          },
          "images": {
            "properties": {
              "id": {
                "type": "text"
              },
              "url": {
                "type": "text"
              }
            }
          },
          "item_info": {
            "properties": {
              "tags": {
                "type": "text"
              },
              "thumbnail": {
                "type": "text"
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
              "Color Name": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "Gloves Size": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "Kid US Size": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "Length": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "Main Stone Color": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "Metal Color": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "Size": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "Type": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "color": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "color name": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "gloves size": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "kid us size": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "length": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "main stone color": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "metal color": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "size": {
                "type": "text",
                "fields": {
                  "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                  }
                }
              },
              "type": {
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
            "type": "long"
          },
          "store_id": {
            "type": "long"
          },
          "thumbnail": {
            "type": "text"
          },
          "title": {
            "type": "text",
            "analyzer": "tiny_prd"
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
                "type": "text"
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
                  "Color Name": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "Gloves Size": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "Kid US Size": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "Length": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "Main Stone Color": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "Metal Color": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "Size": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "Type": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "color": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "color name": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "gloves size": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "kid us size": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "length": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "main stone color": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "metal color": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "size": {
                    "type": "text",
                    "fields": {
                      "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                      }
                    }
                  },
                  "type": {
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