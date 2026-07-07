<?php

function ginfra_register_acf_fields() {
    if (!function_exists('acf_add_local_field_group')) return;

    acf_add_local_field_group(array(
        'key' => 'group_ginfra_hero',
        'title' => 'Hero Section',
        'location' => array(array(array('param' => 'page_type', 'operator' => '==', 'value' => 'front_page'))),
        'fields' => array(
            array('key' => 'field_hero_title', 'name' => 'hero_title', 'label' => 'Title', 'type' => 'text', 'default_value' => 'From plans to implementation, we design, build and deliver'),
            array('key' => 'field_hero_subtitle', 'name' => 'hero_subtitle', 'label' => 'Subtitle', 'type' => 'textarea', 'default_value' => 'Your ally for innovative projects. We accompany you in the development of civil infrastructure, from conception to commissioning.'),
            array('key' => 'field_hero_cta_primary', 'name' => 'hero_cta_primary', 'label' => 'Primary CTA Text', 'type' => 'text', 'default_value' => 'Start a Project'),
            array('key' => 'field_hero_cta_secondary', 'name' => 'hero_cta_secondary', 'label' => 'Secondary CTA Text', 'type' => 'text', 'default_value' => 'View Portfolio'),
        ),
    ));

    acf_add_local_field_group(array(
        'key' => 'group_ginfra_about',
        'title' => 'About Section',
        'location' => array(array(array('param' => 'page_type', 'operator' => '==', 'value' => 'front_page'))),
        'fields' => array(
            array('key' => 'field_about_section_title', 'name' => 'about_section_title', 'label' => 'Section Title', 'type' => 'text', 'default_value' => 'About Us'),
            array('key' => 'field_about_heading', 'name' => 'about_heading', 'label' => 'Heading', 'type' => 'text', 'default_value' => 'Global vision, unquestionable technical precision.'),
            array('key' => 'field_ceo_name', 'name' => 'ceo_name', 'label' => 'CEO Name', 'type' => 'text', 'default_value' => 'Grégoire Geiler'),
            array('key' => 'field_ceo_title', 'name' => 'ceo_title', 'label' => 'CEO Title', 'type' => 'text', 'default_value' => 'Founder & CEO (Over 15 Years Exp.)'),
            array('key' => 'field_ceo_quote', 'name' => 'ceo_quote', 'label' => 'CEO Quote', 'type' => 'textarea', 'default_value' => '"MIND YOUR SAFETY. We identify problems before they occur to guarantee savings and secure results worldwide."'),
            array('key' => 'field_ceo_image', 'name' => 'ceo_image', 'label' => 'CEO Image', 'type' => 'image', 'return_format' => 'url'),
            array('key' => 'field_about_desc_1', 'name' => 'about_desc_1', 'label' => 'Description 1', 'type' => 'textarea', 'default_value' => 'We specialize in method engineering for major civil projects. We develop solutions where technical complexity demands an unprecedented level of accuracy.'),
            array('key' => 'field_about_desc_2', 'name' => 'about_desc_2', 'label' => 'Description 2', 'type' => 'textarea', 'default_value' => 'Operating internationally, we integrate as a strategic partner for consortiums and construction firms, guaranteeing the physical, structural, and financial viability of the most demanding projects.'),
            array('key' => 'field_about_stats', 'name' => 'about_stats', 'label' => 'Statistics', 'type' => 'repeater', 'layout' => 'table', 'sub_fields' => array(
                array('key' => 'field_stat_value', 'name' => 'value', 'label' => 'Value', 'type' => 'text'),
                array('key' => 'field_stat_label', 'name' => 'label', 'label' => 'Label', 'type' => 'text'),
            )),
        ),
    ));

    acf_add_local_field_group(array(
        'key' => 'group_ginfra_services',
        'title' => 'Services Section',
        'location' => array(array(array('param' => 'page_type', 'operator' => '==', 'value' => 'front_page'))),
        'fields' => array(
            array('key' => 'field_services_section_title', 'name' => 'services_section_title', 'label' => 'Section Title', 'type' => 'text', 'default_value' => 'Core Specialties'),
            array('key' => 'field_services_heading', 'name' => 'services_heading', 'label' => 'Heading', 'type' => 'text', 'default_value' => 'Method Engineering Solutions'),
            array('key' => 'field_services_items', 'name' => 'services_items', 'label' => 'Services', 'type' => 'repeater', 'layout' => 'table', 'sub_fields' => array(
                array('key' => 'field_service_id', 'name' => 'id', 'label' => 'ID (methods, equipment, optimization, logistics)', 'type' => 'text'),
                array('key' => 'field_service_title', 'name' => 'title', 'label' => 'Title', 'type' => 'text'),
                array('key' => 'field_service_desc', 'name' => 'description', 'label' => 'Description', 'type' => 'textarea'),
            )),
        ),
    ));

    acf_add_local_field_group(array(
        'key' => 'group_ginfra_gallery',
        'title' => 'Gallery Section',
        'location' => array(array(array('param' => 'page_type', 'operator' => '==', 'value' => 'front_page'))),
        'fields' => array(
            array('key' => 'field_gallery_section_title', 'name' => 'gallery_section_title', 'label' => 'Section Title', 'type' => 'text', 'default_value' => 'Featured Projects'),
            array('key' => 'field_gallery_heading', 'name' => 'gallery_heading', 'label' => 'Heading', 'type' => 'text', 'default_value' => 'Executed Intellectual Work'),
            array('key' => 'field_gallery_items', 'name' => 'gallery_items', 'label' => 'Projects', 'type' => 'repeater', 'layout' => 'block', 'sub_fields' => array(
                array('key' => 'field_gallery_title', 'name' => 'title', 'label' => 'Title', 'type' => 'text'),
                array('key' => 'field_gallery_location', 'name' => 'location', 'label' => 'Location', 'type' => 'text'),
                array('key' => 'field_gallery_image', 'name' => 'image', 'label' => 'Image', 'type' => 'image', 'return_format' => 'url'),
            )),
        ),
    ));

    acf_add_local_field_group(array(
        'key' => 'group_ginfra_diff',
        'title' => 'Differentiator Section',
        'location' => array(array(array('param' => 'page_type', 'operator' => '==', 'value' => 'front_page'))),
        'fields' => array(
            array('key' => 'field_diff_section_title', 'name' => 'diff_section_title', 'label' => 'Section Title', 'type' => 'text', 'default_value' => 'From Design to Execution'),
            array('key' => 'field_diff_heading', 'name' => 'diff_heading', 'label' => 'Heading', 'type' => 'text', 'default_value' => 'What Defines Us'),
            array('key' => 'field_diff_desc', 'name' => 'diff_desc', 'label' => 'Description', 'type' => 'textarea', 'default_value' => 'We base our methodology on fully understanding your needs, ensuring maximum quality, optimizing processes, and maintaining total transparency throughout the project lifecycle.'),
            array('key' => 'field_diff_items', 'name' => 'diff_items', 'label' => 'Differentiator Items', 'type' => 'repeater', 'layout' => 'table', 'sub_fields' => array(
                array('key' => 'field_diff_item_title', 'name' => 'title', 'label' => 'Title', 'type' => 'text'),
                array('key' => 'field_diff_item_desc', 'name' => 'desc', 'label' => 'Description', 'type' => 'textarea'),
            )),
            array('key' => 'field_diff_quote', 'name' => 'diff_quote', 'label' => 'Quote', 'type' => 'textarea', 'default_value' => '"Our participation during the feasibility phase has consistently proven to reduce critical structural incidents to zero and optimize the project CAPEX by a substantial corporate margin."'),
            array('key' => 'field_diff_quote_author', 'name' => 'diff_quote_author', 'label' => 'Quote Author', 'type' => 'text', 'default_value' => 'Global Technical Direction'),
            array('key' => 'field_diff_quote_subtitle', 'name' => 'diff_quote_subtitle', 'label' => 'Quote Subtitle', 'type' => 'text', 'default_value' => 'International Consortiums'),
        ),
    ));
}
add_action('acf/init', 'ginfra_register_acf_fields');
