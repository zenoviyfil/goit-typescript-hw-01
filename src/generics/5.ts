export enum UserRole {
      admin = 'admin',
      editor = 'editor',
      guest = 'guest',
    }
    
    // Замініть наступний код на версію за допомогою Record

    type UserRoleDescription = Record<UserRole, string>

    const RoleDescription: UserRoleDescription = {
      [UserRole.admin]: 'Admin User',
      [UserRole.editor]: 'Editor User',
      [UserRole.guest]: 'Guest User',
    };
    
    // дублюю костанту що б не світилась червоним
    RoleDescription