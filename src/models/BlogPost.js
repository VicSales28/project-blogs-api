const blogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { 
      type: DataTypes.INTEGER, 
      foreingKey: true 
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'User',
      foreingKey: 'userId',
    });
  }

  return BlogPost;
};

module.exports = blogPostModel;