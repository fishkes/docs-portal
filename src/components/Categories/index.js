import React from "react";
import styles from "./categories.module.css";
import CategoryItem from "./CategoryItem";
import { categories } from "./constants";


export default () => (
    <div className={`grid gap-6 justify-center ${styles.categories}`}>
        {categories.saas.map(category => (<CategoryItem title={category.title} subtitle={category.subtitle} icon={category.icon} key={category.icon} />))}

    </div>
);
