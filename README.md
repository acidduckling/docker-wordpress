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