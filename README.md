# Wordpress & Docker

Really basic Docker compose file for WordPress with wp-content volume setup for editing themes locally.
Wordpress site available at http://localhost:8080

DB is exposed on port 3306. Can connect with DBeaver or similar DB management software on the host machine (point to localhost:3306 and use credentials defined in docker-compose.yml)

MyPHPAdmin is available at http://localhost:8181

```bash
# Launch the services with
docker-compose up
```

# Database Config
DB Connection options are configured in .env file to simplify editing, and clarifying which env variables would typically be edited.

# Node API
Node service running on http://localhost:8282/
Also available via reverse proxy at localhost:8080/api

The service can also be accessed via a reverese proxy configured in Apache (see the API Proxy config in the 
[000-default.conf](./web/sites-available/000-default.conf) file)

This is just an example of configuring an API service to be accessible through Apache using reverse proxies.
