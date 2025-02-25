  Product Table
  
  _id INT AUTO_INCREMENT PRIMARY KEY,                 
  p_name VARCHAR(255)   NOT NULL,                         
  p_description VARCHAR(255),                                    
  brandName VARCHAR(255),                             
  model_number VARCHAR(100),                            
  price DECIMAL(10, 2) NOT NULL,      
  originalPrice DECIMAL(10, 2),                        
  discount DECIMAL(5, 2) DEFAULT 0,                   
  image_urls JSON,                               
  category VARCHAR(255),                 
  <!-- bestseller BOOLEAN DEFAULT FALSE,      --> 
  tag VARCHAR(255),                                    
  warranty VARCHAR(255),                         
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
