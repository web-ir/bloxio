<?php
return array(
    'acl' => array(
        'roles' => array(
            'guest'   => null,
            'user'  => 'guest',
            'admin'  => 'user',
            'superadmin'  => 'admin'
        ),
        'resources' => array(
            'allow' => array(
                'Application\Controller\Index' => array(
                    'all'	=> 'guest',
                ),
                'Page\Controller\Page' => array(
                    'all'	=> 'guest',
                ),

                // CMS
                'CmsIr\System\Controller\System' => array(
                    'createThumb'	=> 'guest',
                    'saveEditorImages'	=> 'superadmin',
                ),
				'CmsIr\Authentication\Controller\Index' => array(
					'all'	=> 'guest',
 				),
                'CmsIr\Dashboard\Controller\Index' => array(
                    'all'	=> 'user',
                ),
                'CmsIr\Menu\Controller\Menu' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Users\Controller\Users' => array(
                    'all'	=> 'superadmin',
                    'changePassword' => 'user'
                ),
                'CmsIr\Slider\Controller\Slider' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Newsletter\Controller\Newsletter' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Newsletter\Controller\Subscriber' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Page\Controller\Page' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Post\Controller\Post' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Product\Controller\Product' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Product\Controller\Category' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Product\Controller\Client' => array(
                    'all'	=> 'superadmin',
                ),
                'CmsIr\Product\Controller\Realization' => array(
                    'all'	=> 'superadmin',
                ),
            )
        )
    )
);
