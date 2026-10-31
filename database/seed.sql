USE shinning_buddies;
INSERT INTO users(name,email,password_hash,role) VALUES('Admin','admin@shinningbuddies.in','$2a$10$MAqusEXAxAV.ToEBQJnSduFaIQ/xKPKvH8nUj6jKLznZ9qY01wWH.','admin');
INSERT INTO customers(name,phone,city,capacity_kw,stage) VALUES('Meena Iyer','9800000001','Chennai',5,'Quotation sent'),('Arun Traders','9800000002','Coimbatore',25,'Installing'),('Karthik R','9800000003','Trichy',3,'Completed');
INSERT INTO packages(name,panels,inverter,price) VALUES('Home Starter 3 kW',6,'3 kW hybrid',185000),('Home Plus 5 kW',10,'5 kW on-grid',290000),('Business 25 kW',46,'25 kW three-phase',1340000);
INSERT INTO technicians(name,crew,jobs_done) VALUES('Vignesh K','Crew A',48),('Surya M','Crew B',37);
INSERT INTO inventory_items(item,category,serial_range,serial_seq_end,quantity,status) VALUES('540 W mono panel','panel','SB-P-0001…0400',400,212,'In stock'),('5 kW inverter','inverter','SB-I-0001…0030',30,4,'Low');
