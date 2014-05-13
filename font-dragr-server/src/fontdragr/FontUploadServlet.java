package fontdragr;

import java.io.*;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class FontUploadServlet extends HttpServlet {

    public static final String FOLDER = "fonts";

    private static final long serialVersionUID = -8244073279641189889L;

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

        File folder = new File(FOLDER);
        if (!folder.exists()) {
            folder.mkdirs();
        }

        try {

            if (req.getHeader("Content-Type") != null && req.getHeader("Content-Type").startsWith("multipart/form-data")) {

                ServletFileUpload upload = new ServletFileUpload();
                FileItemIterator iterator = upload.getItemIterator(req);

                while (iterator.hasNext()) {

                    FileItemStream item = iterator.next();

                    if (item.getName() != null) {

                        File file = new File(FOLDER + File.separator + item.getName());

                        if (file.exists()) {
                            file.delete();
                        }

                        InputStream inputStream = item.openStream();
                        OutputStream outputStream = new FileOutputStream(file);

                        int read = 0;
                        byte[] bytes = new byte[1024];

                        while ((read = inputStream.read(bytes)) != -1) {
                            outputStream.write(bytes, 0, read);
                        }

                        outputStream.close();
                        inputStream.close();
                    }
                }
            }
        } catch (Exception ex) {
            throw new ServletException(ex);
        }
    }

}