




//책검색

$("#searchBtn").click(function() {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: $("#bookNameInput").val() },
        headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" }
    })
    .done(function (msg) {
        console.log(msg)
        for (var i = 0; i < 10; i++){
        $( "div" ).append( "<h2>" + msg.documents[i].title + "</h2>" );
        $( "div" ).append( "<a href='" + msg.documents[i].url + "'/>" + "<img src='" + msg.documents[i].thumbnail + "'/>" + " 이미지를 클릭하면 상세정보로 이동 " + "</a>" );
        $( "div" ).append( "<p>" + "정가 : " + msg.documents[i].price + "</p>" );
        $( "div" ).append( "<p>" + "판매가 : " + msg.documents[i].sale_price + "</p>" );
        $( "div" ).append( "<p>" + "책 소개 : " + msg.documents[i].contents + "</p>" );
    }
    });
});
//웹검색

$("#searchWebBtn").click(function() {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/search/web",
        data: { query: $("#webNameInput").val() },
        headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" }
    })
    .done(function (msg) {
        console.log(msg)
        for (var i = 0; i < 10; i++){
        $( '.result_Wb' ).append( "<h2>" + msg.documents[i].title + "</h2>" );
        $( '.result_Wb' ).append( "<a href='" + msg.documents[i].url + "'/>" + "상세정보로 이동 " + "</a>" );
        $( '.result_Wb' ).append( "<p>" + "정가 : " + msg.documents[i].contents + "</p>" );
    }
    });
});
//이미지 검색

$("#searchImageBtn").click(function() {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/search/image",
        data: { query: $("#imageNameInput").val() },
        headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" }
    })
    .done(function (msg) {
        console.log(msg)
        for (var i = 0; i < 10; i++){
        $( '.result_Ib' ).append( "<h2>" + msg.documents[i].collection + "</h2>" );
        $( '.result_Ib' ).append( "<a href='" + msg.documents[i].image_url + "'/>" + "<img src='" + msg.documents[i].thumbnail_url + "'/>" + " 이미지 크게 보기 " + "</a>" );
        $( '.result_Ib' ).append( "<p>" + "출처 : " + msg.documents[i].display_sitename + "</p>" );
        $( '.result_Ib' ).append( "<p>" + "문서 URL : " + msg.documents[i].doc_url + "</p>" );
    }
    });
});

//동영상 검색

$("#searchVideoBtn").click(function() {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/search/vclip",
        data: { query: $("#videoNameInput").val() },
        headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" }
    })
    .done(function (msg) {
        console.log(msg)
        for (var i = 0; i < 3; i++){
        $( '.result_Vb' ).append( "<h2>" + msg.documents[i].title + "</h2>" );
        $( '.result_Vb' ).append( "<a href='" + msg.documents[i].url + "'/>" + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>" );
        $( '.result_Vb' ).append( "<p>" + "동영상 등록일 : " + msg.documents[i].datetime + "</p>" );
        $( '.result_Vb' ).append( "<p>" + "동영상 길이 : " + msg.documents[i].play_time + "초" + "</p>" );
        $( '.result_Vb' ).append( "<p>" + "업로드한 사람 : " + msg.documents[i].author + "</p>" );
    }
    });
});

//카페 검색

$("#searchBlogBtn").click(function() {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/search/blog",
        data: { query: $("#blogNameInput").val() },
        headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" }
    })
    .done(function (msg) {
        console.log(msg)
        for (var i = 0; i < 3; i++){
        $( '.result_Bb' ).append( "<p>" + "블로그명 : " + msg.documents[i].blogname + "</p>" );
        $( '.result_Bb' ).append( "<h2>" + msg.documents[i].title + "</h2>" );
        $( '.result_Bb' ).append( "<a href='" + msg.documents[i].url + "'/>" + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>" );
        $( '.result_Bb' ).append( "<p>" + msg.documents[i].contents + "</p>" );
        $( '.result_Bb' ).append( "<p>" + "글 작성시간 : " + msg.documents[i].datetime + "</p>" );
    }
    });
});

//카페 검색

$("#searchCafeBtn").click(function() {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/search/cafe",
        data: { query: $("#cafeNameInput").val() },
        headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" }
    })
    .done(function (msg) {
        console.log(msg)
        for (var i = 0; i < 3; i++){
        $( '.result_Cb' ).append( "<h2>" + msg.documents[i].title + "</h2>" );
        $( '.result_Cb' ).append( "<a href='" + msg.documents[i].url + "'/>" + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>" );
        $( '.result_Cb' ).append( "<p>" + msg.documents[i].contents + "</p>" );
    }
    });
});
