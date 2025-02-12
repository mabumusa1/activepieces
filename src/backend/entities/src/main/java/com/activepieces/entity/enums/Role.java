package com.activepieces.entity.enums;

import lombok.NonNull;

import java.util.Arrays;
import java.util.List;

public enum Role {
  OWNER(Arrays.asList(Permission.values())),
  API_KEY(Arrays.asList(Permission.values()));

  final List<Permission> permissionList;

  Role(final List<Permission> permissionList) {
    this.permissionList = permissionList;
  }

  public boolean hasPermission(@NonNull final Permission permission) {
    return permissionList.contains(permission);
  }
}
