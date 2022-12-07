import React from "react";
import styles from "./categories.module.css";
import CategoryItem from "./CategoryItem";
import { categories } from "./constants";


export default () => (
    <div className={`grid gap-6 justify-center ${styles.categories}`}>
        {categories.saas.map(category => (<CategoryItem {...category} key={category.icon} />))}

    </div>
);
