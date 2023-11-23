package com.pranay.ecommerce.dao;

import com.pranay.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory , Long> {
}
