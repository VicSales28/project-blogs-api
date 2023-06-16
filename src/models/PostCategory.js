const postCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreingKey: true,
    },
    categoryId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreingKey: true,
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
      as: 'BlogPosts',
      through: PostCategory,
      foreingKey: 'categoryId',
      otherKey: 'postId',
    });

    BlogPost.belongsToMany(Category, {
      as: 'Category',
      through: PostCategory,
      foreingKey: 'postId',
      otherKey: 'categoryId',
    });
  }

  return PostCategory;
};

module.exports = postCategoryModel;