drop database if exists similar_listings;
create database similar_listings;
use similar_listings;
create table Properties (
    id INT, 
    link_id INT, 
    bed_num INT, 
    specs VARCHAR(255), 
    pic VARCHAR(255), 
    description VARCHAR(255), 
    cost VARCHAR(255), 
    stars INT, 
    ratings_num INT, 
    favorite INT
);

LOAD DATA LOCAL INFILE './data.csv' INTO TABLE Properties FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
LOAD DATA LOCAL INFILE './data2.csv' INTO TABLE Properties FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;