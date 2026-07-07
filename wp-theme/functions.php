<?php

require_once get_template_directory() . '/acf-fields.php';

function ginfra_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'ginfra_setup');

function ginfra_enqueue_assets() {
    $dist_path = get_template_directory_uri() . '/dist/';

    wp_enqueue_script('ginfra-react', $dist_path . 'assets/index.js', array(), '1.0.0', true);
    wp_enqueue_style('ginfra-styles', $dist_path . 'assets/index.css', array(), '1.0.0');

    $landing_data = ginfra_get_landing_data();
    wp_localize_script('ginfra-react', 'wpData', $landing_data);
}
add_action('wp_enqueue_scripts', 'ginfra_enqueue_assets');

function ginfra_field($name, $post_id, $default) {
    if (function_exists('get_field')) {
        $val = get_field($name, $post_id);
        if ($val !== null && $val !== '' && $val !== false) {
            return $val;
        }
    }
    return $default;
}

function ginfra_get_landing_data() {
    $post_id = get_option('page_on_front');
    $base = get_template_directory_uri() . '/dist/';

    return array(
        'hero' => array(
            'title' => ginfra_field('hero_title', $post_id, 'From plans to implementation, we design, build and deliver'),
            'subtitle' => ginfra_field('hero_subtitle', $post_id, 'Your ally for innovative projects. We accompany you in the development of civil infrastructure, from conception to commissioning.'),
            'ctaPrimary' => ginfra_field('hero_cta_primary', $post_id, 'Start a Project'),
            'ctaSecondary' => ginfra_field('hero_cta_secondary', $post_id, 'View Portfolio'),
        ),
        'about' => array(
            'sectionTitle' => ginfra_field('about_section_title', $post_id, 'About Us'),
            'heading' => ginfra_field('about_heading', $post_id, 'Global vision, unquestionable technical precision.'),
            'ceoName' => ginfra_field('ceo_name', $post_id, 'Grégoire Geiler'),
            'ceoTitle' => ginfra_field('ceo_title', $post_id, 'Founder & CEO (Over 15 Years Exp.)'),
            'ceoQuote' => ginfra_field('ceo_quote', $post_id, '"MIND YOUR SAFETY. We identify problems before they occur to guarantee savings and secure results worldwide."'),
            'ceoImage' => ginfra_field('ceo_image', $post_id, $base . 'ceo.png'),
            'description1' => ginfra_field('about_desc_1', $post_id, 'We specialize in method engineering for major civil projects. We develop solutions where technical complexity demands an unprecedented level of accuracy.'),
            'description2' => ginfra_field('about_desc_2', $post_id, 'Operating internationally, we integrate as a strategic partner for consortiums and construction firms, guaranteeing the physical, structural, and financial viability of the most demanding projects.'),
            'stats' => ginfra_field('about_stats', $post_id, array(
                array('value' => '9', 'label' => 'Countries'),
                array('value' => '18', 'label' => 'Large-scale Projects'),
                array('value' => '+6M€', 'label' => 'Value Executed'),
                array('value' => '+20', 'label' => 'Controlled Designs'),
            )),
        ),
        'services' => array(
            'sectionTitle' => ginfra_field('services_section_title', $post_id, 'Core Specialties'),
            'heading' => ginfra_field('services_heading', $post_id, 'Method Engineering Solutions'),
            'items' => ginfra_field('services_items', $post_id, array(
                array('id' => 'methods', 'title' => 'Constructive Methods', 'description' => 'Feasibility studies and direct on-site assistance to evaluate operations.'),
                array('id' => 'equipment', 'title' => 'Specific Equipment Design', 'description' => 'Basic and detailed design of customized lifting and structural equipment.'),
                array('id' => 'optimization', 'title' => 'Process Optimization', 'description' => 'Identifying bottlenecks to optimize manufacturing processes directly on site.'),
                array('id' => 'logistics', 'title' => 'Assembly & Logistics', 'description' => 'Coordination with international partners, supervision, and comprehensive personnel training.'),
            )),
        ),
        'gallery' => array(
            'sectionTitle' => ginfra_field('gallery_section_title', $post_id, 'Featured Projects'),
            'heading' => ginfra_field('gallery_heading', $post_id, 'Executed Intellectual Work'),
            'projects' => ginfra_format_gallery(ginfra_field('gallery_items', $post_id, array(
                array('id' => 1, 'title' => 'Puente Atlántico', 'location' => 'Panamá', 'image' => $base . 'project1.png'),
                array('id' => 2, 'title' => 'Hampton Road Bridge Tunnel', 'location' => 'United States', 'image' => $base . 'project2.png'),
                array('id' => 3, 'title' => 'Allianz Riviera', 'location' => 'Nice, France', 'image' => $base . 'project3.png'),
                array('id' => 4, 'title' => 'Puerto Antioquia', 'location' => 'Apartadó, Colombia', 'image' => $base . 'project4.png'),
                array('id' => 5, 'title' => 'Femern Link', 'location' => 'Denmark', 'image' => $base . 'project5.png'),
                array('id' => 6, 'title' => 'Estadio Abdellah Moulay', 'location' => 'Rabat, Morocco', 'image' => 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1000'),
            ))),
        ),
        'differentiator' => array(
            'sectionTitle' => ginfra_field('diff_section_title', $post_id, 'From Design to Execution'),
            'heading' => ginfra_field('diff_heading', $post_id, 'What Defines Us'),
            'description' => ginfra_field('diff_desc', $post_id, 'We base our methodology on fully understanding your needs, ensuring maximum quality, optimizing processes, and maintaining total transparency throughout the project lifecycle.'),
            'items' => ginfra_field('diff_items', $post_id, array(
                array('title' => 'Listen', 'desc' => 'Effective solutions adapted to the needs of each specific project.'),
                array('title' => 'Optimization', 'desc' => 'Fulfilment of deadlines, optimized operations and guaranteed savings.'),
                array('title' => 'Trust', 'desc' => 'Innovative tools designed using precise and reliable methods.'),
                array('title' => 'Transparency', 'desc' => 'Continuous and clear communication at every stage of the project.'),
            )),
            'quote' => ginfra_field('diff_quote', $post_id, '"Our participation during the feasibility phase has consistently proven to reduce critical structural incidents to zero and optimize the project CAPEX by a substantial corporate margin."'),
            'quoteAuthor' => ginfra_field('diff_quote_author', $post_id, 'Global Technical Direction'),
            'quoteSubtitle' => ginfra_field('diff_quote_subtitle', $post_id, 'International Consortiums'),
        )
    );
}

function ginfra_format_gallery($items) {
    if (!$items || !is_array($items)) return array();
    $formatted = array();
    foreach ($items as $index => $item) {
        $formatted[] = array(
            'id' => $item['id'] ?? $index + 1,
            'title' => $item['title'] ?? '',
            'location' => $item['location'] ?? '',
            'image' => $item['image']['url'] ?? $item['image'] ?? '',
        );
    }
    return $formatted;
}
