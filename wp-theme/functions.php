<?php
/**
 * Ginfra Solution Theme Functions
 */

// 1. Setup Theme Supports
function ginfra_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'ginfra_setup');

// 2. Enqueue React Assets
function ginfra_enqueue_assets() {
    $dist_path = get_template_directory_uri() . '/dist/';
    
    // In a real build, Vite generates hashes. For this bridge, 
    // we assume filenames configured in vite.config.ts
    wp_enqueue_script('ginfra-react', $dist_path . 'assets/index.js', array(), '1.0.0', true);
    wp_enqueue_style('ginfra-styles', $dist_path . 'assets/index.css', array(), '1.0.0');

    // 3. Localize Data for React
    $landing_data = ginfra_get_landing_data();
    wp_localize_script('ginfra-react', 'wpData', $landing_data);
}
add_action('wp_enqueue_scripts', 'ginfra_enqueue_assets');

// 4. Helper to fetch ACF data and format it for React
function ginfra_get_landing_data() {
    // We use the ID of the front page
    $post_id = get_option('page_on_front');

    // Fallback data structure matching dataService.ts
    return array(
        'hero' => array(
            'title' => get_field('hero_title', $post_id) ?: "From plans to implementation, we design, build and deliver",
            'subtitle' => get_field('hero_subtitle', $post_id) ?: "Your ally for innovative projects...",
            'ctaPrimary' => get_field('hero_cta_primary', $post_id) ?: "Start a Project",
            'ctaSecondary' => get_field('hero_cta_secondary', $post_id) ?: "View Portfolio",
        ),
        'about' => array(
            'sectionTitle' => get_field('about_section_title', $post_id) ?: "About Us",
            'heading' => get_field('about_heading', $post_id) ?: "Global vision, unquestionable technical precision.",
            'ceoName' => get_field('ceo_name', $post_id) ?: "Grégoire Geiler",
            'ceoTitle' => get_field('ceo_title', $post_id) ?: "Founder & CEO",
            'ceoQuote' => get_field('ceo_quote', $post_id) ?: "...MIND YOUR SAFETY...",
            'ceoImage' => get_field('ceo_image', $post_id) ?: get_template_directory_uri() . '/dist/ceo.png',
            'description1' => get_field('about_desc_1', $post_id) ?: "We specialize in method engineering...",
            'description2' => get_field('about_desc_2', $post_id) ?: "Operating internationally...",
            'stats' => get_field('about_stats', $post_id) ?: array(
                array('value' => '9', 'label' => 'Countries'),
                array('value' => '18', 'label' => 'Projects'),
            ),
        ),
        'services' => array(
            'sectionTitle' => get_field('services_section_title', $post_id) ?: "Core Specialties",
            'heading' => get_field('services_heading', $post_id) ?: "Method Engineering Solutions",
            'items' => get_field('services_items', $post_id) ?: array(),
        ),
        'gallery' => array(
            'sectionTitle' => get_field('gallery_section_title', $post_id) ?: "Featured Projects",
            'heading' => get_field('gallery_heading', $post_id) ?: "Executed Intellectual Work",
            'projects' => ginfra_format_gallery(get_field('gallery_items', $post_id)),
        ),
        'differentiator' => array(
            'sectionTitle' => get_field('diff_section_title', $post_id) ?: "From Design to Execution",
            'heading' => get_field('diff_heading', $post_id) ?: "What Defines Us",
            'description' => get_field('diff_desc', $post_id) ?: "We base our methodology...",
            'items' => get_field('diff_items', $post_id) ?: array(),
            'quote' => get_field('diff_quote', $post_id) ?: "...Our participation during...",
            'quoteAuthor' => get_field('diff_quote_author', $post_id) ?: "Global Technical Direction",
            'quoteSubtitle' => get_field('diff_quote_subtitle', $post_id) ?: "International Consortiums",
        )
    );
}

// Helper to format gallery items
function ginfra_format_gallery($items) {
    if (!$items) return array();
    $formatted = array();
    foreach ($items as $index => $item) {
        $formatted[] = array(
            'id' => $index,
            'title' => $item['title'] ?? '',
            'location' => $item['location'] ?? '',
            'image' => $item['image']['url'] ?? $item['image'] ?? '',
        );
    }
    return $formatted;
}
