---
date: 2026-09-12T18:45:37Z
title: Chevere Authorization
tags:
    - php
    - chevere
author: rodber
summary: Bitwise role-based authorization for PHP
image: /photos/2026/authorization.png
---

New from Chevere is the [Authorization](https://chevere.org/packages/authorization) package. This software provides bitwise role-based authorization for PHP.

The package source is available at [chevere/authorization](https://github.com/chevere/authorization).

## What it does?

Chevere Authorization enables to map roles by unique bit (power of two) to an arbitrary set of permissions (grants). By doing this, you can build bitmasks representing the combination of roles, and check if a given bitmask has the required permission(s).

```php
use Chevere\Authorization\Role;
use Chevere\Authorization\Roles;
use Chevere\Authorization\RolesMask;

$userRole = new Role(
    4, // bit power of two: 1, 2, 4, 8...
    'user', // name
    'post.draft', // permission granted as a string
    PostPermission::View // permission granted via enum
);

$editorRole = new Role(
    2,
    'editor',
    $userRole, // inherits all permissions from $userRole
    PostPermission::Edit,
    PostPermission::Create
);

$adminRole = new Role(
    1,
    'admin',
    ...PostPermission::permits(),
    ...UserPermission::permits(),
    ...EditorPermission::permits()
);

$roles = new Roles($adminRole, $editorRole, $userRole);
$rolesMask = new RolesMask($roles);

// Assert a bit mask has a given permission (throws if not)
$rolesMask->__invoke($bitmask, ...$permission);

// Or check without throwing
$bool = $rolesMask->contains($bitmask, ...$permission);
```

## How it works?

The `RolesMask` instance stores the complete authorization state for all defined roles, from there, you take the user's bitmask representing their assigned roles and check if it contains the required permission(s).

This provides a flexible building block for auth schemas, for example:

```php
use BackedEnum;
use Chevere\Authorization\Interfaces\PermissionInterface;
use Chevere\Authorization\Roles;
use Chevere\Authorization\RolesMask;

class RequestUser
{
    public readonly Roles $roles;

    public function __construct(
        public readonly Roles $roles = new Roles(),
        // ... other user properties
    ) {
    }

    // Shortcut to check if the user has the given permission(s)
    public function hasPermission(string|PermissionInterface|BackedEnum ...$permission): bool
    {
        return $this->roles->permissions()->contains(...$permission);
    }
}

$rolesMask = new RolesMask($roles);
// $user id:1, bitmask:3 from database
$rolesForUser = $rolesMask
    ->roles()
    ->forMask($user->bitmask); // 3 = 1 | 2 (admin + editor)
$requestUser = new RequestUser($rolesForUser, $user->id);
$requestUser->hasPermission(PostPermission::Edit); // true
$requestUser->hasPermission('not.existing'); // false
```

## Wrapping up

I first built this authorization system in 2024 for a client project reverse engineering [FieldClock](https://www.fieldclock.com) software, which needed fine-grained access control based on user roles and permissions. I needed something that could enforce those rules at the middleware level, in controllers, and at the database layer.

[Chevereto Cloud](https://chevereto.com/cloud) had the same requirements, so I refined the foundation into a reusable package for future projects. That effort has now paid off, since the same system is being implemented in [Chevereto V5](https://blog.chevereto.com/2026/06/14/hello-chevereto-v5/).

Seeing this system mature from a one-off client solution into something powering multiple production platforms has been rewarding. It's a good reminder that the best tools often come from solving a real problem first, then taking the time to generalize it properly. I'm looking forward to continuing to refine it as it gets battle-tested across different use cases.
