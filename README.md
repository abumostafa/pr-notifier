# Github PR Manager

# Github webhook (Consumed by github)
```
curl -X POST \
  http://localhost:8008/webhook/github \
  -H 'Content-Type: application/json' \
  -d '{}'

```

# List all events by sent by Github
```
curl -X GET \
  http://localhost:8008/webhook/github/events
```

# Slack webhook (Consumed by slack)
```
curl -X POST \
  http://localhost:8008/webhook/slack \
  -H 'Content-Type: application/json' \
  -d '{}'
```

# List all events by sent by Slack
```
curl -X GET \
  http://localhost:8008/webhook/slack/events
```
