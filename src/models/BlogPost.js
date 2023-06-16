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
      foreignKey: true 
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

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, {
      as: 'user',
      foreignKey: 'userId',
    });
  }

  return BlogPost;
};

module.exports = blogPostModel;