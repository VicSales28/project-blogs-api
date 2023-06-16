const postCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    categoryId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
  },
  {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  }
  );

  PostCategory.associate = ({ Category, BlogPost }) => {

    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }

  return PostCategory;
};

module.exports = postCategoryModel;